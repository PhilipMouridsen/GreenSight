import React from "react";
import "./App.css";

function Create() {
  return (
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
    </div>
  );
}

export default App;
