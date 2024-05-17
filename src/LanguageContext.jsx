import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState('en');

    const toggleLanguage = () => {
        setCurrentLanguage((prevLanguage) => (prevLanguage === 'en' ? 'bg' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ currentLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
