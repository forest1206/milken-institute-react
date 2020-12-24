import React from "react";

const themes = {
  primary: {
    backgroundLightColor: "#0051a4",
    backgroundDarkColor: "#003469",
    hightlightColor: "#ff6633",
  },
  secondary: {
    backgroundLightColor: "#00d2b5",
    backgroundDarkColor: "#00aea4",
    hightlightColor: "#ff6633",
  },
};

export const ThemeContext = React.createContext();

export default function ThemeProvider(props) {
  return (
    <ThemeContext.Provider value={themes}>
      {props.children}
    </ThemeContext.Provider>
  );
}
