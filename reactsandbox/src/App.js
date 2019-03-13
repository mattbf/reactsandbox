import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Home/>
      </div>
    );
  }
}

export default App;
