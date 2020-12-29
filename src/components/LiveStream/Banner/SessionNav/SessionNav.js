import PropTypes from 'prop-types';
import React from 'react';
import DateLink from './../DateLink/DateLink';

export default function SessionNav({ sessionDays }) {
    return (
        <div>
            <div className="dates">
                <ul>
                    {sessionDays.map((item, index) => (
                        <DateLink key={index} singleDay={item} active={true} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

SessionNav.propTypes = {
    sessionDays: PropTypes.array
};
