import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


function Home() {
  return(
      <div>
        <h2>Hello, this the the React Sandbox home page.</h2>
        <ul>
          <li><Link to="/about"> About Page </Link></li>
          <li><Link to="/testing">Testing</Link></li>
          <li><Link to="/cards">cards</Link></li>
          <li><Link to="/adddelete">Add Delete</Link></li>
          <li><Link to="/datepicker"> Responsive Date Picker</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/timezone">Timezone</Link></li>
          <li><Link to="/meetingcard">MeetingCard</Link></li>
          <li><Link to="/apitesting">API Testing</Link></li>
        </ul>
      </div>
  )
}


export default Home
