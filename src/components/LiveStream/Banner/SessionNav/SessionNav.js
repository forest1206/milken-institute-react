import PropTypes from "prop-types";
import React from "react";
import DateLink from "./../DateLink/DateLink";
import moment from "moment";

export default function SessionNav({ sessionDays }) {
  const compareDates = (a, b) => {
    const sessionDate1 = moment(a.date_string);
    const sessionDate2 = moment(b.date_string);

    return sessionDate1.isAfter(sessionDate2);
  };
  return (
    <div>
      <div class="dates">
        <ul>
          {sessionDays.sort(compareDates) &&
            sessionDays.map((item, index) => (
              <DateLink key={index} singleDay={item} active={true} />
            ))}
        </ul>
      </div>
    </div>
  );
}

SessionNav.propTypes = {
  sessionDays: PropTypes.object,
};
