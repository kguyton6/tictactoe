import React, { createContext, useContext } from "react";

const ThemeContext = createContext("dark");

export default ( props ) => {
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
