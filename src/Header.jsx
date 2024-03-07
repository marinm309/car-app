import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Header(props){
    
    return(
        <header>
            <div className="whole-nav-container">
                <div className="container">
                    <div className="logo"><Link to={'/'}>Logo</Link></div>
                    <h4><i><b>Събрани на едно място автомобили за познавачи и ценители!</b></i></h4>
                    {/* <form className="search-form" action="#" method="GET">
                        <div className="search-bar">
                            <input type="text" name="search" placeholder="Search..." />
                            <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        </div>
                    </form> */}
                    {/* <nav className="nav-menu">
                        <ul>
                            <li><Link>Placeholder 1</Link></li>
                            <li><Link>Placeholder 2</Link></li>
                            <li><Link to={'/home2'} style={{color: 'pink', fontWeight: 'bold', backgroundColor: 'grey', borderRadius: '10px', padding: '5px'}}>Лили версия</Link></li>
                        </ul>
                    </nav> */}
                    {/* <div className="burger-menu">
                        <FontAwesomeIcon icon={faBars} />
                    </div> */}
                </div>
            </div>
        </header>
    )

}

export default Header