import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function Footer(){

    const { currentLanguage } = useContext(LanguageContext)

    const location = useLocation();

    return(
        <>
            {!location.pathname.includes('contact') && currentLanguage == 'bg' ?
                <footer className="footer-container"><p>При интерес, моля свържете се с нас <Link to={'/contact'}>тук</Link></p></footer> : undefined    
            }

            {!location.pathname.includes('contact') && currentLanguage == 'en' ?
                <footer className="footer-container"><p>If interested, please contact us <Link to={'/contact'}>here</Link></p></footer> : undefined    
            }
        </>
    )

}

export default Footer