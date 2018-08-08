import React, { Component } from 'react';
import logo from './images/record-main.png';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';

const Button = styled.button `
  display: inline-block;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: transparent;
  color: palevioletred;
  &:hover ${Button} {
  background: palevioletred;
  color: white;
}`;

const Home = () => (
  <div>
    <h2> Welcome to your Vinyl Collection</h2>
    </div>
)

const Have = () => (
  <div>
  <h2> Records you have </h2>
  </div>
)

const Want = () => (
  <div>
    <h2>A list of records you want!</h2>
  </div>
)

const Add = () => (
  <div>
    <h2>Add it here!</h2>
  </div>
)

const BasicExample = () => (
  <Router>
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Vinyl Collection</h1>
    </header>
      <ul>
        <li><Link to="/"><Button>Home</Button></Link></li>
        <li><Link to="/have"><Button>Have</Button></Link></li>
        <li><Link to="/want"><Button>Want</Button></Link></li>
        <li><Link to="/add"><Button>Add</Button></Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/have" component={Have}/>
      <Route path="/want" component={Want}/>
      <Route path="/add" component={Add}/>
    </div>
  </Router>
)
export default BasicExample
/* class App extends Component {
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
            >
            Have
          </Button>
          <Button
            name='want-button'
            value='want'
            >
            Want
          </Button>
          </p>
          <Button
            name='add-button'
            value='add'
            >
            Add a Record
          </Button>
      </div>
    );
  }
}

export default App; */
