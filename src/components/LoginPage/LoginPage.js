import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import Leaf from "../leaf.png";
import Header from "../header/Header";
import { firebaseAppAuth, provider } from "../../firebase";

export default function LoginPage() {
  const handleSignIn = () => firebaseAppAuth.signInWithPopup(provider);

  return (
    <div className="loginPage">
      <Header />
      <br />
      <br />
      <br />
      <br />
      <input type="text" placeholder="Username" id="username" name="username" />
      <input
        type="password"
        placeholder="Password"
        id="password"
        name="password"
      />
      <br />
      <br />
      <button onClick={handleSignIn}>Login</button>
      <br />
      <Link to="/create">
        <button id="create-button">
          Don't have an account yet? Create one here!
        </button>
      </Link>
      {/* <img src={Leaf} alt="leaf"></img> */}
    </div>
  );
}
