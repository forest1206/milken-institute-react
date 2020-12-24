import React, { useContext, useEffect } from "react";
import DateLink from "./DateLink/DateLink";
import "./banner.scss";
import { ThemeContext } from "./../../../ThemeProvider";
import SessionNav from "./SessionNav/SessionNav";
import CurrentStream from "./CurrentStream/CurrentStream";

export default function Banner({ title, sessionDays, videoUrl }) {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    console.log("theme", theme);
  });

  if (!theme) {
    return null;
  }

  return (
    <>
      <div className="section">
        <div class="container">
          <h2
            class="title-sup"
            style={{ color: theme.primary.hightlightColor }}
          >
            {title}
          </h2>
          <h2 class="title">Livestream Schedule</h2>
          <SessionNav sessionDays={sessionDays} />
        </div>
      </div>
      <div class="section">
        <CurrentStream videoUrl={videoUrl} />
      </div>
    </>
  );
}
