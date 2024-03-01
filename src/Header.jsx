import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Header(props){
    
    return(
        <header>
            <div className="whole-nav-container">
                <div className="container">
                    <div className="logo"><Link to={'/'}>Logo</Link></div>
                    <form className="search-form" action="#" method="GET">
                        <div className="search-bar">
                            <input type="text" name="search" placeholder="Search..." />
                            <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        </div>
                    </form>
                    <nav className="nav-menu">
                        <ul>
                            <li><a href="#">Placeholder 1</a></li>
                            <li><a href="#">Placeholder 2</a></li>
                            <li><a href="#">Placeholder 3</a></li>
                        </ul>
                    </nav>
                    <div className="burger-menu">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>
        </header>
    )

}

export default Header