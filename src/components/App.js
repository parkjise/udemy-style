import React,{useState} from 'react';
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
import LightTheme from 'theme/light';
import DarkTheme from 'theme/dark';

const GlobalStyle = createGlobalStyle`
  body{
    background:${p => p.theme.bodyBackgroundColor};
    min-height:100vh;
    margin: 0;
    color: ${p => p.theme.bodyFontColor};

  }
  p{
    font-size:12px
  }
  .tit{
    font-family: 'Protest Riot', sans-serif;
  }
`

function App() {
  const [theme,setTheme] = useState(LightTheme);
  return (
      <ThemeProvider theme={{...theme, setTheme: () => {
        setTheme(s => s.id === 'light' ? DarkTheme: LightTheme);
      }}}>
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
          <i class="ri-arrow-left-up-line"></i>
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit itaque qui voluptates quas veritatis et praesentium? Pariatur distinctio rem est autem corrupti sed, non, qui iusto repudiandae, unde rerum amet.
        </div>
        <Button>Primary Button</Button>
        <Button secondary>Secondary Button</Button>
        <Button disabled>Disabled Button</Button>
        <Button large>Large Button</Button>
    </ThemeProvider>
  );
}

export default App;
