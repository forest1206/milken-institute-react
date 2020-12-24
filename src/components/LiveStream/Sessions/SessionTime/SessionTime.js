import PropTypes from 'prop-types';
import React from 'react';

export default function SessionTime({ data }) {
    return (
        <li>
            <div className="session_time">
                <p>
                    <span>{data.time}</span>
                </p>
            </div>
            <div className="session_title">
                <p>
                    <a className="watch_video" href={`${data.url}`}>
                        {data.title}
                    </a>
                </p>
            </div>
            <div className="session_links">
                <a className="watch_video" href={`${data.url}`}>
                    <i className="far fa-play-circle"></i>
                </a>
            </div>
        </li>
    );
}

SessionTime.propTypes = {
    data: PropTypes.shape({
        time: PropTypes.string,
        title: PropTypes.string,
        url: PropTypes.string
    })
};
