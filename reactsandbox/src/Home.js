import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


function About() {
  return(
    <div>
      <h1>About Page</h1>
      <Link to="/"> Home Page </Link>
    </div>
  )
}

function Home() {
  return(
      <div>
        <h2>Hello, this the the React Sandbox home page.</h2>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"> Testing out Links! </a>
        <Link to="/about"> About Page </Link>
      </div>
  )
}


export default Home
