import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

function Footer(){

    return(
        <>
            <footer className="footer-container">
                <p>При интерес, моля свържете се с нас <Link>тук</Link></p>
            </footer>
        </>
    )

}

export default Footer