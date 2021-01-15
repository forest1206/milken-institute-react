import PropTypes from 'prop-types';
import React from 'react';
import SessionNav from './SessionNav/SessionNav';
import CurrentStream from './CurrentStream/CurrentStream';
import './banner.scss';

export default function Banner({ title, sessionDays, videoUrl }) {
    return (
        <>
            <div className="section">
                <div className="container">
                    <h2 className="title-sup">{title}</h2>
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
