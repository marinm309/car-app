import { Link } from "react-router-dom"

const categories = [
    {id: 1, img: './src/assets/dodge.jpg', brand: 'Dodge'},
    {id: 2, img: './src/assets/mustang.jpg', brand: 'Ford'},
    {id: 3, img: './src/assets/chevrolet.jpg', brand: 'Chevrolet'},
]

function Categories(){
    return(
        <>
          <section className="categories container">
                {categories.map(category => (
                    <Link key={category.id}>
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