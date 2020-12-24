/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import { Link } from 'react-scroll';

export default function DateLink({ singleDay, isActive }) {
    const renderDateClass = () => {
        const sessionDate = moment(singleDay.date_string);
        const hoursDiff = moment.duration(sessionDate.diff(moment.now())).asHours();

        const className = hoursDiff > 0 ? '' : hoursDiff > -24 ? 'current-date' : 'past-date';
        return className;
    };

    const renderDateLetter = () => {
        let dateLinkDateArray = singleDay.date_string.split(',');
        let dateLinkLetter =
            dateLinkDateArray[0] === 'Thursday' ? 'TH' : dateLinkDateArray[0].substring(0, 1);
        return dateLinkLetter;
    };

    const renderDay = () => {
        let dateLinkDateArray = singleDay.date_string.split(', ');

        return dateLinkDateArray[1];
    };

    return (
        <div>
            <li className={renderDateClass()}>
                <Link
                    activeClass="active"
                    to={singleDay.day_anchor}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}>
                    <h2>{renderDateLetter()}</h2>
                    <h3>{renderDay()}</h3>
                </Link>
            </li>
        </div>
    );
}

DateLink.propTypes = {
    isActive: PropTypes.bool,
    singleDay: PropTypes.shape({
        date_string: PropTypes.string,
        day_anchor: PropTypes.string
    })
};
