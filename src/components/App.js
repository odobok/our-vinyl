import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
    <div className = "App" >
      <div>
        <Header/>
        <Nav/>
      </div>
    </div>
  );
  }
};

export default App;
