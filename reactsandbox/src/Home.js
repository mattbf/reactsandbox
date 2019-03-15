import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


function Home() {
  return(
      <div>
        <h2>Hello, this the the React Sandbox home page.</h2>
        <Link to="/about"> About Page </Link>
      </div>
  )
}


export default Home
