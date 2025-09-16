import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../../utils/store/languageReducer';

const LanguageSwitch = () => {
    const dispatch = useDispatch();
    const currentLanguage = useSelector((state) => state.language.language);

    const handleLanguageChange = () => {
        const newLanguage = currentLanguage === 'en' ? 'de' : 'en';
        dispatch(setLanguage(newLanguage));
    };

    return (
        <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
            <button 
                onClick={handleLanguageChange} 
                style={{
                    padding: '10px 15px',
                    backgroundColor: '#333',
                    color: 'white',
                    border: '1px solid white',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontFamily: 'sans-serif',
                    fontSize: '14px'
                }}
            >
                {currentLanguage.toUpperCase()}
            </button>
        </div>
    );
};

export default LanguageSwitch;