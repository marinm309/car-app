import React from 'react';
import { useParams } from 'react-router-dom';
import ReactImageGallery from "react-image-gallery";

const carReviews = {
  1: {brand: 'Dodge Challenger', model: 'SRT', placeholder: 'Placeholder for car 1', images: ['../public/dodge.jpg', '../public/dodge1.jpg', '../public/dodge2.jpg', '../public/dodge.jpg']},
  2: {brand: 'Ford Mustang', model: 'GT500', placeholder: 'Placeholder for car 2', images: ['../public/mustang.jpg', '../public/mustang.jpg', '../public/mustang.jpg']},
  3: {brand: 'Chevrolet Camaro', model: 'ZL1', placeholder: 'Placeholder for car 3', images: ['../public/chevrolet.jpg', '../public/chevrolet.jpg', '../public/chevrolet.jpg']},
  4: {brand: 'Dodge Challenger', model: 'SRT', placeholder: 'Placeholder for car 1', images: ['../public/dodge.jpg', '../public/dodge1.jpg', '../public/dodge2.jpg', '../public/dodge.jpg']},
}

const CarReview = () => {

  const { carId } = useParams();
  const carInfo = carReviews[carId];
  
  const images = carInfo.images.map((img, index) => ({
      original: carInfo.images[index], 
      thumbnail: carInfo.images[index]
    }))

  return (
    <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10 single-car-review">
      <div className="container mx-auto px-4">
        <ReactImageGallery
          showBullets={false}
          showFullscreenButton={false}
          showPlayButton={false}
          items={images}
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

