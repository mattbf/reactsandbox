import React, { Component } from 'react';
import './App.css';
import GlobalRouter from './GlobalRouter.js';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#00c853",
    }, 
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <GlobalRouter>
          <div className="App">
          </div>
        </GlobalRouter>
      </MuiThemeProvider>
    );
  }
}
export default App;
