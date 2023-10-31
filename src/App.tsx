import React from 'react';
import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Router from './shared/Router';

const App = () => {
  return (
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
  );
}

export default App;
