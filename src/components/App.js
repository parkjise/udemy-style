import React from 'react';
import 'assets/css/themes.css';
import {Button} from 'components/common';
import { createGlobalStyle,ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Login from './pages/Login';
import Home from './pages/Home';

const GlobalStyle = createGlobalStyle`
  body{
    background:white;
    min-height:100vh;
    margin: 0;
    color: black;

  }
  p{
    font-size:12px
  }
  .tit{
    font-family: 'Protest Riot', sans-serif;
  }
`
const theme = {
  primaryColor:'#f8049c',
  secondaryColor:'#fdd54f'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Router>
        <Routes>
          <Route path="login" element={ <Login /> } />
          <Route path="/" element={ <Home /> } />
        </Routes>
      </Router>
        <h1 className='tit'>App112323144</h1>
        <div>
          <i className="ri-arrow-up-circle-fill test11"></i>
        </div>
        <Button>Primary Button</Button>
        <Button secondary>Secondary Button</Button>
        <Button disabled>Disabled Button</Button>
        <Button large>Large Button</Button>
    </ThemeProvider>
  );
}

export default App;
