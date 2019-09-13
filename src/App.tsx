import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import ContextWrapper from './containers/ContextWrapper';
import Layout from './styles/Layout';
import ThemeSwitch from './components/ThemeSwitch';
import Header from './components/Header';
import { Main } from './styles/styles';
import Board from './containers/Board';


export default () => (
    <ContextWrapper>
      <Layout>
        <Header>
          <h1>Tic Tac Toe</h1>
          <ThemeSwitch />
        </Header>
        <Main>
         <Board />
       </Main>
      </Layout>
    </ContextWrapper>
  );
