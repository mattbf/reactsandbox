import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';

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

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <hr/>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
