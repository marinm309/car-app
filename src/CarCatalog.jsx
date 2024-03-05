import React from 'react';
import { Link } from 'react-router-dom';

const cars = [
  { id: 1, name: 'Mercedes', img: '/mercedes/DK Cars 1-1.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
  { id: 2, name: 'Cadillac', img: '/cadillac/DK Cars 14-1.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
  { id: 3, name: 'Buick', img: '/buick/DK Cars 18-1.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
  { id: 4, name: 'Mercedes', img: '/mercedes/DK Cars 3-1.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
  { id: 5, name: 'Cadillac', img: '/cadillac/DK Cars 27-1.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
  { id: 6, name: 'Buick', img: '/buick/DK Cars 39-1.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
  { id: 7, name: 'Mercedes', img: '/mercedes/DK Cars 6-1.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
  { id: 8, name: 'Cadillac', img: '/cadillac/DK Cars 28-1.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
  { id: 9, name: 'Buick', img: '/buick/DK Cars 45-1.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
];

function CarCatalog() {
  return (
    // <div>
    //   <ul classNameName="catalog-container container">
    //     {cars.map(car => (
    //       <li key={car.id}>
    //         <div classNameName="card">
    //             <img src={car.img} alt="Card Image" />
    //             <div classNameName="card-content">
    //             <h3 classNameName="card-title">{car.name}</h3>
    //             <p classNameName="card-text">{car.description}</p>
    //             <Link classNameName={car.soldOut ? 'card-link-disabled' : 'card-link'} to={`/car/${car.id}`}>Read More</Link>
    //             {/* {car.soldOut ? <span classNameName="sold-out">Sold Out</span> : undefined} */}
    //             </div>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <>
      <ul className="catalog-container container">
        {cars.map(car => (
          <li key={car.id}>
          <Link to={`/car/${car.id}`}>
          <div>
              <article className="card">
                  <header className="card__thumb">
                      <img src={car.img}/>
                  </header>
                  <div className="card__body">
                      <h2 className="card__title">{car.name}</h2>
                      <div className="card__subtitle">Placeholder</div>
                      <p className="card__description">{car.description}</p>
                  </div>
              </article>
          </div>
          </Link>
      </li>
        ))}
      </ul>
    </>
  );
}

export default CarCatalog;
