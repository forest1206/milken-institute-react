import PropTypes from 'prop-types';
import React from 'react';
import Session from './Session/Session';
import './session.scss';
import moment from 'moment';

export default function Sessions({ sessionDays }) {
    const compareDates = (a, b) => {
        const sessionDate1 = moment(a.date_string);
        const sessionDate2 = moment(b.date_string);

        return sessionDate1.isBefore(sessionDate2);
    };

    const isCurrent = (sessionDay) => {
        const hoursDiff = moment
            .duration(moment(sessionDay.date_string).diff(moment.now()))
            .asHours();

        return hoursDiff > -24 && hoursDiff < 0;
    };

    const isPast = (sessionDay) => {
        const hoursDiff = moment
            .duration(moment(sessionDay.date_string).diff(moment.now()))
            .asHours();

        return hoursDiff < -24;
    };

    const isUpcoming = (sessionDay) => {
        const hoursDiff = moment
            .duration(moment(sessionDay.date_string).diff(moment.now()))
            .asHours();

        return hoursDiff > 0;
    };

    const getOrderedSessionDays = () => {
        const currentDays = sessionDays.filter(isCurrent).sort(compareDates);
        const pastDays = sessionDays.filter(isPast).sort(compareDates);
        const upcomingDays = sessionDays.filter(isUpcoming).sort(compareDates);
        // console.log('pastDays', pastDays);
        // console.log('upcomingDays', upcomingDays);
        return [...currentDays, ...upcomingDays, ...pastDays];
    };

    return (
        <>
            {getOrderedSessionDays().map((item, index) => (
                <Session key={index} idx={index + 1} sessionDay={item} />
            ))}
        </>
    );
}

Sessions.propTypes = {
    sessionDays: PropTypes.array
};
