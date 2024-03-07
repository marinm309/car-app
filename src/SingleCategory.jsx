import React from 'react';
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';

const cars = [
    { id: 1, name: 'Mercedes', img: '/mercedes/DK Cars 1-2.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { id: 2, name: 'Cadillac', img: '/cadillac/DK Cars 14-2.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { id: 3, name: 'Buick', img: '/buick/DK Cars 18-2.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { id: 4, name: 'Mercedes', img: '/mercedes/DK Cars 3-2.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { id: 5, name: 'Cadillac', img: '/cadillac/DK Cars 27-2.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { id: 6, name: 'Buick', img: '/buick/DK Cars 39-2.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { id: 7, name: 'Mercedes', img: '/mercedes/DK Cars 6-2.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { id: 8, name: 'Cadillac', img: '/cadillac/DK Cars 28-2.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { id: 9, name: 'Buick', img: '/buick/DK Cars 45-2.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
  ];


function SingleCategory(){

    const { carCategory } = useParams();
    const filteredCars = cars.filter(car => car.name.toLowerCase() == carCategory)

    return (
        <div>
          <ul className="catalog-container container">
            {/* {filteredCars.map(car => (
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
            ))} */}

        <li>
          <Link to={`/car/${1}`}>
          <div>
              <article className="card card1">
                  <header className="card__thumb">
                      <img src={'/mercedes/DK Cars 1-2.jpg'}/>
                  </header>
                  <div className="card__body">
                      <h2 className="card__title">{'1998, w140, s600'}</h2>
                      <div className="card__subtitle">{'60 000km, v12'}</div>
                      <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur laboriosam ratione quisquam impedit ipsum! Repellat harum, nemo maxime distinctio aspernatur vitae suscipit, repellendus et quaerat nobis ut fugit quo totam?</p>
                  </div>
              </article>
          </div>
          </Link>
      </li>

      <li>
          <Link to={`/car/${2}`}>
          <div>
              <article className="card card2">
                  <header className="card__thumb">
                      <img src={'/mercedes/DK Cars 1-2.jpg'}/>
                  </header>
                  <div className="card__body">
                      <h2 className="card__title">{'1998, w140, s600'}</h2>
                      <div className="card__subtitle">{'60 000km, v12'}</div>
                      <p className="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur laboriosam ratione quisquam impedit ipsum! Repellat harum, nemo maxime distinctio aspernatur vitae suscipit, repellendus et quaerat nobis ut fugit quo totam?</p>
                  </div>
              </article>
          </div>
          </Link>
      </li>

      <li>
          <Link to={`/car/${3}`}>
          <div>
          <div class="card3">

          <img src={'/mercedes/DK Cars 1-2.jpg'}/>

  <div class="overlay">
    <div class = "items"></div>
    <div class = "items head">
      <p>Flower Embroidery Hoop Art</p>
      <hr/>
    </div>
    <div class = "items price">
      <p class="old">$699</p>
      <p class="new">$345</p>
    </div>
    <div class="items cart">
      <i class="fa fa-shopping-cart"></i>
      <span>ADD TO CART</span>
  </div>
</div>
</div>
          </div>
          </Link>
      </li>

      <li>
          <Link to={`/car/${4}`}>
          <section class="page">
  <div class="card4">
  <img src={'/mercedes/DK Cars 1-2.jpg'}/>

    <p class="card__button">Learn more</p>
  </div>
</section>
          </Link>
      </li>


          </ul>
        </div>
      );
}

export default SingleCategory