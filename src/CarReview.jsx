import React from 'react';
import { useParams } from 'react-router-dom';
import ReactImageGallery from "react-image-gallery";
import carInfo from './carInfo';

const carReviews = {
  1: carInfo['1'],
  2: carInfo['2'],
  3: carInfo['3'],
  4: carInfo['4'],
  5: carInfo['5'],
  6: carInfo['6'],
  7: carInfo['7'],
  8: carInfo['8'],
  9: carInfo['9'],
}
const CarReview = () => {

  const { carId } = useParams();
  const carInfo = carReviews[carId];
  
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

