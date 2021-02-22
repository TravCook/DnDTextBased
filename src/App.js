import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/loginPage/login.js"

function App() {
  return (
    <Router>
      <div className="container ">
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;
