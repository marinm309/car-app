import { Link } from "react-router-dom"

const categories = [
    {id: 1, img: 'https://dk-car-app.s3.eu-central-1.amazonaws.com/18/DK+Cars+18-2.jpg', brand: 'Buick'},
    {id: 2, img: 'https://dk-car-app.s3.eu-central-1.amazonaws.com/14/DK+Cars+14-2.jpg', brand: 'Cadillac'},
    {id: 3, img: 'https://dk-car-app.s3.eu-central-1.amazonaws.com/1/DK+Cars+1-2.jpg', brand: 'Mercedes'},
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