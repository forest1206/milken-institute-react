import React, { useContext, useEffect, useState } from 'react';
import classnames from 'classnames';
import { FaCog } from 'react-icons/fa';
import { ThemeContext } from './../../../ThemeProvider';
import './sidepanel.scss';

export default function SidePanel() {
    const { theme, changeTheme } = useContext(ThemeContext);

    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        console.log('SidePanel', theme, changeTheme);
        loadSavedThemeOption();
    }, []);

    const loadSavedThemeOption = () => {
        let theme = localStorage.getItem('theme') || 'blue';
        setSelected(theme);
    };

    const handleThemeChange = (color) => {
        setSelected(color);
        changeTheme(color);
    };

    return (
        <div className="side-panel">
            <div className="panel-toggler" onClick={() => setShow(!show)}>
                <FaCog />
            </div>
            <div
                className={classnames('color-panel', {
                    show: show
                })}>
                <span
                    className={classnames('badge', 'badge-green', {
                        active: selected === 'green'
                    })}
                    onClick={() => handleThemeChange('green')}></span>
                <span
                    className={classnames('badge', 'badge-blue', {
                        active: selected === 'blue'
                    })}
                    onClick={() => handleThemeChange('blue')}></span>
            </div>
        </div>
    );
}
