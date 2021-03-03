import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar.js"
import Login from "./components/loginPage/login.js"
import Signup from "./components/signupPage/signupPage.js"
import Create from "./components/characterCreate/characterCreate.js"
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/create" component={Create} />
    </Router>
  );
}

export default App;
