import { Link, useLocation } from 'react-router-dom';

function Footer(){

    const location = useLocation();

    return(
        <>
            {!location.pathname.includes('contact') ? <footer className="footer-container">
                <p>При интерес, моля свържете се с нас <Link to={'/contact'}>тук</Link></p>
            </footer> : undefined}
        </>
    )

}

export default Footer