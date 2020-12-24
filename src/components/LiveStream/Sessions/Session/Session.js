import React from "react";
import { Element } from "react-scroll";
import SessionTime from "../SessionTime/SessionTime";
import moment from "moment";

export default function Session({ sessionDay, idx }) {
  const renderSessionBadge = () => {
    const sessionDate = moment(sessionDay.date_string);
    const hoursDiff = moment.duration(sessionDate.diff(moment.now())).asHours();
    const sessionBadgeText =
      hoursDiff > 0
        ? "Upcoming Sessions"
        : hoursDiff > -24
        ? "Current Sessions"
        : "Past Sessions";

    return sessionBadgeText;
  };
  return (
    <Element name={sessionDay.day_anchor} class="section">
      <div id={`${sessionDay.day_anchor}`}></div>
      <div class="container schedule">
        <h1>{renderSessionBadge()}</h1>
        <h2>Day {idx}</h2>
        <h3>{sessionDay.date_string}</h3>
        <div class="schedule_rows">
          <ul>
            {sessionDay.data.map((timeData, index) => (
              <SessionTime key={index} data={timeData} />
            ))}
          </ul>
        </div>
      </div>
    </Element>
  );
}
