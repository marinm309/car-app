import { useContext } from "react"
import { Link } from "react-router-dom"

import { LanguageContext } from "./LanguageContext"

function Categories(){

    const { currentLanguage } = useContext(LanguageContext)

    const categories = [
        {id: 1, img: 'https://dk-car-app.s3.eu-central-1.amazonaws.com/18/DK+Cars+18-2.jpg', brand: 'Buick', link: 'buick'},
        {id: 2, img: 'https://dk-car-app.s3.eu-central-1.amazonaws.com/14/DK+Cars+14-2.jpg', brand: 'Cadillac', link: 'cadillac'},
        {id: 3, img: 'https://dk-car-app.s3.eu-central-1.amazonaws.com/1/DK+Cars+1-2.jpg', brand: 'Mercedes', link: 'mercedes'},
        {id: 4, img: 'https://dk-car-app.s3.eu-central-1.amazonaws.com/31/DK+Cars+31-2.jpg', brand: currentLanguage == 'bg' ? 'Други' : 'Others', link: 'others'},
    ]

    return(
        <>
          <section className="categories container" style={{'overflow': 'hidden'}}>
                {categories.map(category => (
                    <Link key={category.id} to={`/category/${category.link}`}>
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