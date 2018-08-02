import React, { Component } from 'react';
import logo from './images/record-main.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Vinyl Collection</h1>
        </header>
        <p className="App-intro">
          Have | Want | Add
        </p>
      </div>
    );
  }
}

export default App;
