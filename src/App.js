import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar.js"
import Login from "./components/loginPage/login.js"
import Signup from "./components/signupPage/signupPage.js"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="loginContainer">
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </div>
    </Router>
  );
}

export default App;
