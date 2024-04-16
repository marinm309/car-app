import React from 'react';
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import categoriesInfo from './categoriesInfo';

const cars = categoriesInfo

function SingleCategory(){

    const { carCategory } = useParams();
    const filteredCars = cars.filter(car => car.name.toLowerCase() == carCategory)

    return (
        <div className="single-category-container">
            <ul className="bookmarks-container">
                <li><Link to={'/category/buick'}><p>Buick</p></Link><img src={'/bookmark.png'}></img></li>
                <li><Link to={'/category/cadillac'}><p>Cadillac</p></Link><img src={'/bookmark.png'}></img></li>
                <li><Link to={'/category/mercedes'}><p>Mercedes</p></Link><img src={'/bookmark.png'}></img></li>
                <li><Link to={'/category/others'}><p>Other</p></Link><img src={'/bookmark.png'}></img></li>
            </ul>
            <div className="for-space"></div>
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
        </div>
      );
}

export default SingleCategory