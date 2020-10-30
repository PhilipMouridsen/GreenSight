import React from "react";
import NavBar from "../NavBar.js";
import "./App.css";
import Logo from "../Banner.png";
import LoginPage from "../LoginPage/LoginPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <body>{<LoginPage />}</body>
      <Route path="/NavBar" component={NavBar}/>
    </Router>
  );
}

export default App;
