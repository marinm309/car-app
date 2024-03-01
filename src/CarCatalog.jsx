import React from 'react';
import { Link } from 'react-router-dom';

const cars = [
  { id: 1, name: 'Dodge Challenger', img: './public/dodge.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', soldOut: false },
  { id: 2, name: 'Ford Mustang', img: './public/mustang.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', soldOut: true },
  { id: 3, name: 'Chevrolet Camaro', img: './public/chevrolet.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', soldOut: false },
  { id: 4, name: 'Dodge Challenger', img: './public/dodge2.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', soldOut: false },
];

function CarCatalog() {
  return (
    <div>
      <ul className="catalog-container container">
        {cars.map(car => (
          <li key={car.id}>
            <div className="card">
                <img src={car.img} alt="Card Image" />
                <div className="card-content">
                <h3 className="card-title">{car.name}</h3>
                <p className="card-text">{car.description}</p>
                <Link className={car.soldOut ? 'card-link-disabled' : 'card-link'} to={`/car/${car.id}`}>Read More</Link>
                {car.soldOut ? <span className="sold-out">Sold Out</span> : undefined}
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarCatalog;
