import React from "react";
import NavBar from "../NavBar.js";
import Logo from "../Banner.png";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={Logo} alt="logo"></img>
        </header>
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        <br />
        <button>Login</button>
        <br />
        <Link to="/NavBar">
          <button id="create-button">
            Don't have an account yet? Create one here!
          </button>
        </Link>
        <NavBar />
      </div>
    </Router>
  );
}

export default LoginPage;
