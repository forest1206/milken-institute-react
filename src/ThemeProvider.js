import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useEffect } from 'react';

const themes = {
    blue: {
        backgroundLightColor: '#0051a4',
        backgroundDarkColor: '#003469',
        hightlightColor: '#ff6633'
    },
    green: {
        backgroundLightColor: '#00d2b5',
        backgroundDarkColor: '#00aea4',
        hightlightColor: '#003469'
    }
};

const DEFAULT_THEME = 'blue';

export const ThemeContext = React.createContext();

export default function ThemeProvider(props) {
    const [themeName, setThemeName] = useState(null);

    useEffect(() => {
        loadSavedThemeOption();
    }, []);

    const loadSavedThemeOption = () => {
        let theme = localStorage.getItem('theme') || DEFAULT_THEME;
        setThemeName(theme);
    };

    const changeTheme = (value) => {
        localStorage.setItem('theme', value);
        setThemeName(value);
    };

    return (
        <ThemeContext.Provider value={{ theme: themes[themeName], changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.any
};
