import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons'

function Footer(){

    return(
        <>
            <footer className="footer-container">
                <div className="footer-social-container">
                    <a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="#" target="_blank"><FontAwesomeIcon icon={faTiktok} /></a>
                </div>
                <div className="footer-logo-container">
                    <h2>LOGO</h2>
                    <p>Copyright &reg; 2024 LOGO</p>
                </div>
                <div className="footer-info-container">
                    <ul>
                        <li><a href="#">About Us</a></li> |
                        <li><a href="#">FAQs</a></li> |
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )

}

export default Footer