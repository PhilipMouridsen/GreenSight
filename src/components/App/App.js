import React from "react";
import NavBar from "../NavBar.js"
import "./App.css";
//import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    //<Router>
    <div className="App">
      <header className="App-header">
        <h1>Green Sight</h1>
      </header>
      <input type="text" placeholder="Username" id="username" name="username" />
      < br/>
      <input
        type="password"
        placeholder="Password"
        id="password"
        name="password"
      />
      <br/>
      <button>Login</button>
      <br/>
      <button id="create-button">
        Don't have an account yet? Create one here!
      </button>
      <NavBar />
    </div>
    //</Router>
  );
}

export default App;
