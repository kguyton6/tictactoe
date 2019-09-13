import React, { useContext } from "react";
import { DarkModeContext } from "../hooks/DarkModeContext";
import { Toggle, Input, Label } from '../styles/styles';

export default () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <Toggle>
    <>
      <Input
        type="checkbox"
        id="theme-toggle"
        onChange={toggleDarkMode}
        checked={darkMode} />
      <Label
      style={{ background: darkMode && '#a4e7fc'}}
      htmlFor={"theme-toggle"}>
        <span className={darkMode ? 'isDark' : 'isLight'}>{darkMode ? "Light" : "Dark"} Mode</span>
      </Label>
    </>
    </Toggle>
  );
};
