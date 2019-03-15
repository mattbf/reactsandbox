import React, { Component } from 'react';
import './App.css';
import GlobalRouter from './GlobalRouter.js';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <GlobalRouter>
        <div className="App">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </GlobalRouter>
    );
  }
}
export default App;
