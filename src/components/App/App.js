import React from "react";
import NavBar from "../NavBar.js";
import "./App.css";
import Logo from "../Banner.png";
import LoginPage from "../LoginPage/LoginPage";
import Dashboard from "../Dashboard";
import Create from "../Create";
import { Route, Switch, Link } from "react-router-dom";
import ProgressBar from "../ProgressBar";

const testData = [
  { bgcolor: "#ADE7FF", completed: 60 },
  { bgcolor: "#ADE7FF", completed: 30 },
  { bgcolor: "#ADE7FF", completed: 53 },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={Logo} alt="logo"></img>
        </Link>
      </header>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={LoginPage} />
        <Route path="/create" component={Create} />
      </Switch>
    </div>
  );
}

export default App;
