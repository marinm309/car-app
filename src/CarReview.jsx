import React from 'react';
import { useParams } from 'react-router-dom';
import ReactImageGallery from "react-image-gallery";
import carInfo from './carInfo';

const carReviews = carInfo

const CarReview = () => {

  function zoomHandler(){
const mainContainer = document.querySelector('.image-gallery-slides')
mainContainer.children[0].setAttribute('id', 'imageContainer')
mainContainer.children[0].children[0].setAttribute('id', 'zoom-image')

const mainDiv = document.getElementById('imageContainer');

// Zoom On Scroll
const image = document.getElementById('zoom-image');
image.onload = createImage;

let actualImageWidth;
let actualImageHeight;

function createImage() {
    actualImageWidth = image.width;
    actualImageHeight = image.height;
    console.log("Actual Image Width and Height: ", [actualImageWidth, actualImageHeight]);
}

let zoomScrollX = 0;
let zoomScrollY = 0;

let zoomFactor = 1;
image.addEventListener('wheel', function(event) {
    event.preventDefault();
    const xPos = event.clientX - image.getBoundingClientRect().left;
    const yPos = event.clientY - image.getBoundingClientRect().top;

    if (event.deltaY < 0) {
        if (zoomFactor <= 4) {
            console.log('zoomFactor Value: ', zoomFactor);
            zoomFactor += 1;
            console.log('Zoom Factor: ', zoomFactor);

            checkZoom();

            mainDiv.scrollTo(zoomScrollX, zoomScrollY);
        } else {
            console.log('Reached Max Zoom Level');
        }
    } else {
        if (zoomFactor >= 2) {
            console.log('zoomFactor Value: ', zoomFactor);
            zoomFactor -= 1;
            console.log('Zoom Factor: ', zoomFactor);
            console.log('Zoom out...');

            zoomScrollX = xPos * zoomFactor;
            zoomScrollY = yPos * zoomFactor;

            checkZoom();

            mainDiv.scrollTo(zoomScrollX, zoomScrollY);
        } else {
            console.log('Reached Minimum Zoom Level');
        }
    }
});

// Function CheckZoom Level.
function checkZoom() {
    console.log('Zoom Level: ', zoomFactor);
    console.log("Actual Image Width: ", actualImageWidth);
    console.log("Actual Image Height: ", actualImageHeight);

    const imageWidth = actualImageWidth * zoomFactor;
    const imageHeight = actualImageHeight * zoomFactor;

    image.style.width = imageWidth + 'px';
    image.style.height = imageHeight + 'px';

    console.log('Image Width: ', imageWidth);
    console.log('Image Height: ', imageHeight);
}

// Pan Function 
const Pannable = (EL) => {
    let isPan = false;
    let initial = { x: 0, y: 0 };

    const getXY = ({ clientX, clientY }) => {
        const bcr = EL.getBoundingClientRect();
        return {
            x: clientX - bcr.left,
            y: clientY - bcr.top,
        }
    };

    const panStart = (ev) => {
        ev.preventDefault();
        isPan = true;
        const { x, y } = getXY(ev);
        initial = { x: EL.scrollLeft + x, y: EL.scrollTop + y };
    };

    const panMove = (ev) => {
        if (!isPan) return;
        const { x, y } = getXY(ev);
        EL.scrollTo(initial.x - x, initial.y - y);
    };

    const panEnd = (ev) => {
        isPan = false;
    };

    EL.addEventListener("mousedown", panStart);
    document.addEventListener("mousemove", panMove);
    document.addEventListener("mouseup", panEnd);
};

document.querySelectorAll(".viewport").forEach(Pannable);

  }

  const { carId } = useParams();
  const carInfo = carReviews[carId];

  const imagesCount = carInfo.imagesCount
  
  carInfo.images = Array.from({ length: imagesCount }, (_, x) => `https://dk-car-app.s3.eu-central-1.amazonaws.com/${carId}/DK+Cars+${carId}-${x+1}.jpg`);

  const images = carInfo.images.map((img, index) => ({
      original: carInfo.images[index], 
      thumbnail: carInfo.images[index]
    }))

  const onClickHandler = () => {
    document.querySelector('.image-gallery-fullscreen-button').click()
  };

  
  return (
    <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10 single-car-review">
      <div className="container mx-auto px-4">
        <ReactImageGallery
          lazyLoad={true}
          showBullets={false}
          showFullscreenButton={true}
          showPlayButton={false}
          items={images}
          slideDuration={0}
          onClick={onClickHandler}
        />

      </div>

      <section className="car-info">
        <h2>{carInfo.brand}</h2>
        <p>Manufacturer: {carInfo.placeholder}</p>
        <p>Year: {carInfo.placeholder}</p>
        <p>Engine: {carInfo.placeholder}</p>
        <p>Top Speed: {carInfo.placeholder}</p>
        <p>Price: {carInfo.placeholder}</p>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia, turpis sit amet dapibus vehicula, felis justo efficitur lorem, ac commodo velit sem nec sapien.</p>
    </section>
    </section>
  );
};

export default CarReview;

