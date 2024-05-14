import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactImageGallery from "react-image-gallery";
import carInfo from './carInfo';
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";

const carReviews = carInfo

const CarReview = () => {

  const { carId } = useParams();
  const carInfo = carReviews[carId];

  const imagesCount = carInfo.imagesCount
  
  carInfo.images = Array.from({ length: imagesCount }, (_, x) => `https://dk-car-app.s3.eu-central-1.amazonaws.com/${carId}/DK+Cars+${carId}-${x+1}.jpg`);

  const images = carInfo.images.map((img, index) => ({
      original: carInfo.images[index], 
      thumbnail: carInfo.images[index]
    }))

  const [isFullScreen, setIsFullScreen] = useState(false);

  const galleryRef = useRef(null)

  const handleFullScreenChange = () => {
    setIsFullScreen(document.fullscreenElement !== null);
    const dynamicElement = document.querySelector('.image-gallery-thumbnails-wrapper');
    dynamicElement.style.display = dynamicElement.style.display != 'none' ? 'none' : 'block'
    const resetBtns = document.querySelectorAll('.res-btn')
      for(let i of resetBtns){
        i.click()
      }
  };

  const [startPosition, setStartPosition] = useState(null);

  const handleMouseDown = (event) => {
    setStartPosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  const handleMouseUp = (event) => {
    if (startPosition) {
      const endPosition = {
        x: event.clientX,
        y: event.clientY
      };

      const distance = Math.sqrt(
        Math.pow(endPosition.x - startPosition.x, 2) +
        Math.pow(endPosition.y - startPosition.y, 2)
      );

      if (distance <= 4) {
        galleryRef.current.toggleFullScreen()
      }
      setStartPosition(null);
    }
  };

  const Controls = () => {
    const { resetTransform } = useControls();
    return (
      <>
        <button style={{'display': 'none'}} className="res-btn" onClick={() => resetTransform(10)}>Reset</button>
      </>
    );
  };

  return (
    
    <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10 single-car-review">
      <div className="container mx-auto px-4">
        <ReactImageGallery
          ref={galleryRef}
          onScreenChange={handleFullScreenChange}
          lazyLoad={true}
          showBullets={false}
          showFullscreenButton={true}
          showPlayButton={false}
          items={images}
          slideDuration={0}
          renderItem={(item) => (
            <div 
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            >
              <TransformWrapper
              doubleClick={{
                disabled: true
              }}
              disabled={isFullScreen ? false : true}
              disablePadding={true}
              smooth={true}
              panning={{
                  velocityDisabled: true
              }}
              wheel={{
                smoothStep: 0.005,
                step: 1
              }}
              >
                <Controls />
                <TransformComponent>
                  <img src={item.original} className="gallery-main-image" />
                </TransformComponent>
              </TransformWrapper>
            </div>
          )}
        />

      </div>

      <section className="car-info">
        <p><b>Марка: </b>{carInfo.brand}</p>
        <p>Модел: {carInfo.model}</p>
        <p>Година на производтво: {carInfo.yearMade}</p>
        <p>Външен цвят: {carInfo.outerColor}</p>
        <p>Вътрешен цвят: {carInfo.innerColor}</p>
        <p>Двигател: {carInfo.engine}</p>
        <p>Километраж: {carInfo.kilometers}</p>
        <p>Статус: {carInfo.status}</p>
        <p>Катастрофи: {carInfo.crashes}</p>
        <p>Екстри</p>
        <p>Подробна история</p>
        <p>Цена: {carInfo.price}</p>
    </section>
    </section>
  );
};

export default CarReview;

