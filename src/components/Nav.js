import React from 'react';
import '../App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import Have from './Have';
import Want from './Want';
import Add from './Add';

const Button = styled.button`
  display: inline-block;
  font-size: 1em;
  margin: 1em;
  width: 5em;
  padding: 0.5em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: transparent;
  color: palevioletred;
  &:hover ${Button} {
  background: palevioletred;
  color: white;
  };
`;

const Nav = () => (
  <Router>
    <div>
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
);

export default Nav;
