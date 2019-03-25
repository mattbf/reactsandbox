import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import Testing from './Testing.js';
import AddDelete from './AddDelete.js';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

function About() {
  return(
    <div>
      <h1>About Page</h1>
      <Link to="/"> Home Page </Link>
    </div>
  )
}

class GlobalRouter extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/testing" component={Testing} />
          <Route path="/adddelete" component={AddDelete} />
        </div>
      </Router>
    );
  }
}
export default GlobalRouter;
