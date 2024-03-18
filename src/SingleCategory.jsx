import React from 'react';
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';

const cars = [
    { id: 1, name: 'Mercedes', img: `https://dk-car-app.s3.eu-central-1.amazonaws.com/1/DK+Cars+${1}-${2}.jpg`, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { id: 2, name: 'Cadillac', img: `https://dk-car-app.s3.eu-central-1.amazonaws.com/14/DK+Cars+${14}-${2}.jpg`, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { id: 3, name: 'Buick', img: `https://dk-car-app.s3.eu-central-1.amazonaws.com/18/DK+Cars+${18}-${2}.jpg`, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { id: 4, name: 'Mercedes', img: `https://dk-car-app.s3.eu-central-1.amazonaws.com/3/DK+Cars+${3}-${2}.jpg`, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { id: 5, name: 'Cadillac', img: `https://dk-car-app.s3.eu-central-1.amazonaws.com/27/DK+Cars+${27}-${2}.jpg`, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { id: 6, name: 'Buick', img: `https://dk-car-app.s3.eu-central-1.amazonaws.com/39/DK+Cars+${39}-${2}.jpg`, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { id: 7, name: 'Mercedes', img: `https://dk-car-app.s3.eu-central-1.amazonaws.com/6/DK+Cars+${6}-${2}.jpg`, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { id: 8, name: 'Cadillac', img: `https://dk-car-app.s3.eu-central-1.amazonaws.com/28/DK+Cars+${28}-${2}.jpg`, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { id: 9, name: 'Buick', img: `https://dk-car-app.s3.eu-central-1.amazonaws.com/45/DK+Cars+${45}-${2}.jpg`, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
  ];


function SingleCategory(){

    const { carCategory } = useParams();
    const filteredCars = cars.filter(car => car.name.toLowerCase() == carCategory)

    return (
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
                                <h2 className="card__title">{'1998, w140, s600'}</h2>
                                <div className="card__subtitle">{'60 000km, v12'}</div>
                            </div>
                        </article>
                    </div>
                    </Link>
                </li>
            ))}
          </ul>
      );
}

export default SingleCategory