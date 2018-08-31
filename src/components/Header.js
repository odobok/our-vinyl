import React from 'react';
import logo from '../images/record-main.png';
import '../App.css';
import { BrowserRouter as Router } from 'react-router-dom';

const Header = () => (
  <Router>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="spinning-vinyl" />
      <h1 className="App-title">Vinyl Collection!!!</h1>
    </header>
  </Router>
);

export default Header;
