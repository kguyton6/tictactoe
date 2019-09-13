import React, { useContext } from 'react';
import { DarkModeContext } from '../hooks/DarkModeContext';
import styled from 'styled-components';

const Layout = styled.div`
    background-color: ${props => (
        props.darkMode ? "black" : "E2E1E0"
    )};
    color: ${props => props.darkMode ? "white" : "black"};
    width: 100vw;
    height: 100vh;

`

export default props => {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <Layout darkMode={darkMode}>
            {props.children}
        </Layout>
    )
}