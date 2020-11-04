import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="App">
      <input type="text" placeholder="Username" id="username" name="username" />
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
      <Link to="/create">
        <button id="create-button">
          Don't have an account yet? Create one here!
        </button>
      </Link>
    </div>
  );
}

export default LoginPage;
