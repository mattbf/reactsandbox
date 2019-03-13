import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function About() {
  return(
    <div>
      <h1>About Page</h1>
      <Link to="/"> Home Page </Link>
    </div>
  )
}

function GlobalRouter() {
  return(
    <div>
      <Route path="/about" component={About} />
      <Route exact path="/" component={Home} />
    </div>
   )
}

function Home() {
  return(
    <GlobalRouter>
      <div>
        <h2>Hello, this the the React Sandbox home page.</h2>
        <a href="https://www.google.com" target="_blank"> Testing out Links! </a>
         <Link to="/about"> About Page </Link>
      </div>
    </GlobalRouter>
  )
}


export default Home
