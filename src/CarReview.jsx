import React, { useState, useRef, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ReactImageGallery from "react-image-gallery";
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import MobileDetect from 'mobile-detect';

import { LanguageContext } from './LanguageContext';
import carsInfo from './carsInfo';

const CarReview = () => {

  const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext)

  const { carId } = useParams();
  const carInfo = carsInfo[carId];

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
    'extras': currentLanguage == 'bg' ? 'Екстри' : 'Extras',
    'history': currentLanguage == 'bg' ? 'Подробна история' : 'Detailed history',
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

          {currentLanguage == 'bg' ? (<><section className="car-info">
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
      <p>{carInfo[carInfoThirdSection]}</p>
    </div></>) : (<><section className="car-info">
        <p><b>Manufacturer: </b>{carInfo.brand}</p>
        <p><b>Model:</b> {carInfo.model}</p>
        <p><b>Year of manufacture:</b> {carInfo.yearMade}</p>
        <p><b>Outer color:</b> {carInfo.outerColor}</p>
        <p><b>Inner color:</b> {carInfo.innerColor}</p>
        <p><b>Engine:</b> {carInfo.engine}</p>
        <p><b>Mileage:</b> {carInfo.kilometers}</p>
        <p><b>Status:</b> {carInfo.status}</p>
        <p><b>Crashes:</b> {carInfo.crashes}</p>
        <p><button className="car-info-btn" id="extras" onClick={carInfoHandler}><b><i>Extras</i></b></button></p>
        <p><button className="car-info-btn" id="history" onClick={carInfoHandler}><b><i>Detailed history</i></b></button></p>
        <p><b>Price:</b> {carInfo.price}</p>
    </section>

    <div className="car-info-pop-up">
      <h2>{carInfoThirdSection ? carInfoThirdSectionObj[carInfoThirdSection] : ''}</h2>
      <p>{carInfo[carInfoThirdSection]}</p>
    </div></>)}

    </section>
  );
};

export default CarReview;

