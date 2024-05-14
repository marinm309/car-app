import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactImageGallery from "react-image-gallery";
import carInfo from './carInfo';
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import MobileDetect from 'mobile-detect';

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

  const [carInfoThirdSection, setCarInfoThirdSection] = useState(null)
  const md = new MobileDetect(window.navigator.userAgent);
  const isMobile = md.mobile() !== null;
  const carInfoThirdSectionObj = {
    'extras': 'Екстри',
    'history': 'Подробна история',
  }

  const carInfoHandler = (event) => {
    if(carInfoThirdSection && carInfoThirdSection == event.currentTarget.id){
      setCarInfoThirdSection(null)
    }
    else{
      setCarInfoThirdSection(event.currentTarget.id)
    }
  }

  useEffect(() => {
    const carInfoThirdSectionElement = document.querySelector('.car-info-pop-up')

    if(carInfoThirdSection){
      carInfoThirdSectionElement.style.display = 'unset'
      if (isMobile) {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      }
    }
    else{
      carInfoThirdSectionElement.style.display = 'none'
    }
  },[carInfoThirdSection])

  return (
    <section className="container flex-grow max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10 single-car-review">
      <div className="container mx-auto px-4 car-info-gallery-container">
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
        <p><b>Модел:</b> {carInfo.model}</p>
        <p><b>Година на производтво:</b> {carInfo.yearMade}</p>
        <p><b>Външен цвят:</b> {carInfo.outerColor}</p>
        <p><b>Вътрешен цвят:</b> {carInfo.innerColor}</p>
        <p><b>Двигател:</b> {carInfo.engine}</p>
        <p><b>Километраж:</b> {carInfo.kilometers}</p>
        <p><b>Статус:</b> {carInfo.status}</p>
        <p><b>Катастрофи:</b> {carInfo.crashes}</p>
        <p><button className="car-info-btn" id="extras" onClick={carInfoHandler}><b><i>Екстри</i></b></button></p>
        <p><button className="car-info-btn" id="history" onClick={carInfoHandler}><b><i>Подробна история</i></b></button></p>
        <p><b>Цена:</b> {carInfo.price}</p>
    </section>

    <div className="car-info-pop-up">
      <h2>{carInfoThirdSection ? carInfoThirdSectionObj[carInfoThirdSection] : ''}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis repellendus illo veniam aliquid repellat doloribus non, et facilis officiis, rerum facere fuga. Repellendus at, quos repellat harum laboriosam aliquid!</p>
    </div>

    </section>
  );
};

export default CarReview;

