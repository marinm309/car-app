import React from 'react';
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';

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


function SingleCategory(){

    const { carCategory } = useParams();
    const filteredCars = cars.filter(car => car.name.toLowerCase() == carCategory)

    return (
        <div>
          <ul className="catalog-container container">
            {filteredCars.map(car => (
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
        </div>
      );
}

export default SingleCategory