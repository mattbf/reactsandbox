import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import Testing from './Testing.js';
import Cards from './SimpleAdd.js';
import AddDelete from './AddDelete.js';
import Wrapper from './AddDelete/Wrapper.js';
import DatePickerResponsive from './DatePickerResponsive.js';
import Calendar from './Calendar.js';
import TimeZone from './TimeZone.js';
import MeetingTypeCardEdit from './MeetingTypeCard.js';
import APITesting from './API/APITesting.js';



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
          <Route path="/cards" component={Cards} />
          <Route path="/testing" component={Testing} />
          <Route path="/meetingcard" component={MeetingTypeCardEdit} />
          <Route path="/adddelete" component={Wrapper} />
          <Route path="/datepicker" component={DatePickerResponsive} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/timezone" component={TimeZone} />
          <Route path="/apitesting" component={APITesting} />
        </div>
      </Router>
    );
  }
}
export default GlobalRouter;
