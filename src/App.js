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
          <button
            name='have-button'
            value='have'
            //onClick={this.onButtonClick}
            >
            Have
          </button>
          <button
            name='want-button'
            value='want'
            //onClick={this.onButtonClick}
            >
            Want
          </button>
          </p>
          <button
            name='add-button'
            value='add'
            //onClick={this.onButtonClick}
            >
            Add a Record
          </button>
      </div>
    );
  }
}

export default App;
