import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './utils/style/GlobalStyle';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);