import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './../../../ThemeProvider';
import SessionNav from './SessionNav/SessionNav';
import CurrentStream from './CurrentStream/CurrentStream';
import './banner.scss';

export default function Banner({ title, sessionDays, videoUrl }) {
    const { theme } = useContext(ThemeContext);

    if (!theme) {
        return null;
    }

    return (
        <>
            <div className="section">
                <div className="container">
                    <h2 className="title-sup" style={{ color: theme.hightlightColor }}>
                        {title}
                    </h2>
                    <h2 className="title">Livestream Schedule</h2>
                    <SessionNav sessionDays={sessionDays} />
                </div>
            </div>
            <div className="section">
                <CurrentStream videoUrl={videoUrl} />
            </div>
        </>
    );
}

Banner.propTypes = {
    sessionDays: PropTypes.array,
    title: PropTypes.string,
    videoUrl: PropTypes.string
};
