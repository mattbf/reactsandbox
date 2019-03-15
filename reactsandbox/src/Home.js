import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


function Home() {
  return(
      <div>
        <h2>Hello, this the the React Sandbox home page.</h2>
        <ul>
          <li><Link to="/about"> About Page </Link></li>
          <li><Link to="/testing">Testing</Link></li>
        </ul>
      </div>
  )
}


export default Home
