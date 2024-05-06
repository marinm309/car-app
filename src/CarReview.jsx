import React, { useState } from 'react';
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

  const handleFullScreenChange = () => {
    setIsFullScreen(document.fullscreenElement !== null);
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
        const resetBtns = document.querySelectorAll('.res-btn')
        for(let i of resetBtns){
          i.click()
        }
        document.querySelector('.image-gallery-fullscreen-button').click() 
      }

      setStartPosition(null);
    }
  };

  const [rotationEnabled, setRotationEnabled] = useState(false);

  const toggleRotation = () => {
    setRotationEnabled(prevState => !prevState);
    if (window.screen.orientation) {
      if (rotationEnabled && window.screen.orientation.lock) {
        window.screen.orientation.lock("portrait-primary");
      } else if (!rotationEnabled && window.screen.orientation.unlock) {
        window.screen.orientation.unlock();
      }
    } else {
      console.error("Screen orientation API not available.");
    }
  };

  const Controls = () => {
    const { resetTransform } = useControls();
    return (
      <>
        <button style={{'display': 'hidden'}} className="res-btn" onClick={() => resetTransform(0)}>Reset</button>
      </>
    );
  };

  return (
    
    <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10 single-car-review">
      <div className="container mx-auto px-4">
        <ReactImageGallery
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
            onClick={toggleRotation}
            >
              <TransformWrapper
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

