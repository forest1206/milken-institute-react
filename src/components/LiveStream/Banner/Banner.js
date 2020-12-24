import React, { useContext, useEffect } from "react";
import "./banner.scss";
import { ThemeContext } from "./../../../ThemeProvider";
import SessionNav from "./SessionNav/SessionNav";
import CurrentStream from "./CurrentStream/CurrentStream";

export default function Banner({ title, sessionDays, videoUrl }) {
  const { theme, changeTheme } = useContext(ThemeContext);

  useEffect(() => {
    setCSSVariables(theme);
  });

  const setCSSVariables = (theme) => {
    for (const value in theme) {
      document.documentElement.style.setProperty(`--${value}`, theme[value]);
    }
  };

  if (!theme) {
    return null;
  }

  return (
    <>
      <div className="section">
        <div class="container">
          <h2 class="title-sup" style={{ color: theme.hightlightColor }}>
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
