import { Link } from 'react-router-dom';
import Categories from '../Categories';

const categories = [
    {id: 1, img: '/mercedes/DK Cars 1-1.jpg', brand: 'Mercedes'},
    {id: 2, img: '/cadillac/DK Cars 14-1.jpg', brand: 'Cadillac'},
    {id: 3, img: '/buick/DK Cars 18-1.jpg', brand: 'Buick'},
]

function Home2(){
    return(
        <>
          <section className="categories container categories-home2">
                {categories.map(category => (
                    <Link key={category.id} to={`/category/${category.brand.toLowerCase()}`}>
                        <div className="category category-home2">
                            <img src={category.img} alt="Category 1 Image" />
                            <h2>{category.brand}</h2>
                        </div>
                    </Link>
                ))}
        </section>
        </>
    )
}

export default Home2