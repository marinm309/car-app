import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function Header(){

    const { currentLanguage, toggleLanguage } = useContext(LanguageContext);
    
    return(
        <header>
            <div className="whole-nav-container">
                <div className="container nav-container">
                {currentLanguage === 'en' ? (
                        <>
                            <h4 className="header-msg-1"><i><b>Gathered in one place, cars for connoisseurs and enthusiasts!</b></i></h4>
                            <h4 className="header-msg-2"><i><b>The timeless classics!</b></i></h4>
                        </>
                    ) : (
                        <>
                            <h4 className="header-msg-1"><i><b>Събрани на едно място автомобили за познавачи и ценители!</b></i></h4>
                            <h4 className="header-msg-2"><i><b>Вечните класики!</b></i></h4>
                        </>
                    )}
                    <button className="lang-btn" onClick={toggleLanguage}>{currentLanguage === 'en' ? 'BG' : 'EN'}</button>
                </div>
            </div>
        </header>
    )

}

export default Header