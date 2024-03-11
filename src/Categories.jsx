import { Link } from "react-router-dom"

const categories = [
    {id: 1, img: '/buick/DK Cars 18-2.jpg', brand: 'Buick'},
    {id: 2, img: '/cadillac/DK Cars 14-2.jpg', brand: 'Cadillac'},
    {id: 3, img: '/mercedes/DK Cars 1-2.jpg', brand: 'Mercedes'},
]

function Categories(){
    return(
        <>
          <section className="categories container">
                {categories.map(category => (
                    <Link key={category.id} to={`/category/${category.brand.toLowerCase()}`}>
                        <div className="category">
                            <img src={category.img} alt="Category 1 Image" />
                            <h2>{category.brand}</h2>
                        </div>
                    </Link>
                ))}
        </section>
        </>
    )
}

export default Categories