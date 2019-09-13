import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "../hooks/DarkModeContext";

const Header = styled.header`
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ececec;
  h1 {
      font: bold 55px Helvetica;
      color: ${props => props.darkMode ? "white" : "#474747"};
      padding: 10px 50px;
  }
`;

export default props => {
    const { darkMode } = useContext(DarkModeContext);
  return <Header darkMode={darkMode}>{props.children}</Header>;
};
