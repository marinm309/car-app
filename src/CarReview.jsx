import React from 'react';
import { useParams } from 'react-router-dom';
import ReactImageGallery from "react-image-gallery";
import carInfo from './carInfo';

const carReviews = {
  1: carInfo['1'],
  2: {brand: 'Cadillac', placeholder: 'Placeholder for car 2', images: ['/mustang.jpg', '/mustang.jpg', '/mustang.jpg']},
  3: {brand: 'Buick', placeholder: 'Placeholder for car 3', images: ['/chevrolet.jpg', '/chevrolet.jpg', '/chevrolet.jpg']},
  4: {brand: 'Mercedes', placeholder: 'Placeholder for car 4', images: ['/mercedes/DK Cars 3-1.jpg', '/mercedes/DK Cars 3-2.jpg', '/mercedes/DK Cars 3-1.jpg', '/mercedes/DK Cars 3-2.jpg']},
  5: {brand: 'Cadillac', placeholder: 'Placeholder for car 5', images: ['/mustang.jpg', '/mustang.jpg', '/mustang.jpg']},
  6: {brand: 'Buick', placeholder: 'Placeholder for car 6', images: ['/chevrolet.jpg', '/chevrolet.jpg', '/chevrolet.jpg']},
  7: {brand: 'Mercedes', placeholder: 'Placeholder for car 7', images: ['/mercedes/DK Cars 6-1.jpg', '/mercedes/DK Cars 6-2.jpg', '/mercedes/DK Cars 6-1.jpg', '/mercedes/DK Cars 6-2.jpg']},
  8: {brand: 'Cadillac', placeholder: 'Placeholder for car 8', images: ['/mustang.jpg', '/mustang.jpg', '/mustang.jpg']},
  9: {brand: 'Buick', placeholder: 'Placeholder for car 9', images: ['/chevrolet.jpg', '/chevrolet.jpg', '/chevrolet.jpg']},
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

