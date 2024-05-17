import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

    const [currentLanguage, setCurrentLanguage] = useState(() => {
        return localStorage.getItem('currentLanguage') || 'bg';
    });

    useEffect(() => {
        localStorage.setItem('currentLanguage', currentLanguage);
    }, [currentLanguage]);

    const toggleLanguage = () => {
        setCurrentLanguage((prevLanguage) => (prevLanguage === 'en' ? 'bg' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ currentLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
