import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


function Home() {
  return(
      <div>
        <h2>Hello, this the the React Sandbox home page.</h2>
        <ul>
          <li><Link to="/about"> About Page </Link></li>
          <li><Link to="/testing">Testing</Link></li>
          <li><Link to="/simpleAdd">Simple Add</Link></li>
          <li><Link to="/adddelete">Add Delete</Link></li>
          <li><Link to="/datepicker"> Responsive Date Picker</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
        </ul>
      </div>
  )
}


export default Home
