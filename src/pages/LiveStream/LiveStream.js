import React, { useEffect, useState, useContext } from 'react';
import Banner from '../../components/LiveStream/Banner/Banner';
import Sessions from '../../components/LiveStream/Sessions/Sessions';
import BackToTop from '../../components/LiveStream/BackToTop/BackToTop';
import SidePanel from '../../components/LiveStream/SidePanel/SidePanel';
import { sessionAPI } from '../../api';
import { ThemeContext } from './../../ThemeProvider';

export default function LiveStream() {
    const { theme } = useContext(ThemeContext);

    const [sessionDays, setSessionDays] = useState([]);

    useEffect(() => {
        getSessionsData();
    }, []);

    useEffect(() => {
        setCSSVariables(theme);
    });

    const setCSSVariables = (theme) => {
        for (const value in theme) {
            let key = value
                .split(/(?=[A-Z])/)
                .map((s) => s.toLowerCase())
                .join('-');

            document.documentElement.style.setProperty(`--${key}`, theme[value]);
        }
    };

    const getSessionsData = async () => {
        let res = await sessionAPI.fetchSessionDays();
        if (res.status === 200) {
            setSessionDays(res.data);
        } else {
            console.log('error', res);
        }
    };

    return (
        <div id="livestream-wrapper">
            <Banner title="Global Conference 2020" sessionDays={sessionDays} />
            <Sessions sessionDays={sessionDays} />
            <SidePanel />
            <BackToTop />
        </div>
    );
}
