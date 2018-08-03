import React, { Component } from 'react';
import logo from './images/record-main.png';
import './App.css';
import styled from 'styled-components';

const Button = styled.button`
display: inline-block;
font-size: 1em;
margin: 1em;
padding: 0.5em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
background: transparent;
color: palevioletred;
&:hover ${Button} {
  background: blue;
}
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Vinyl Collection</h1>
        </header>
        <p className="App-intro">
          <Button
            name='have-button'
            value='have'
            //onClick={this.onButtonClick}
            >
            Have
          </Button>
          <Button
            name='want-button'
            value='want'
            //onClick={this.onButtonClick}
            >
            Want
          </Button>
          </p>
          <Button
            name='add-button'
            value='add'
            //onClick={this.onButtonClick}
            >
            Add a Record
          </Button>
      </div>
    );
  }
}

export default App;
