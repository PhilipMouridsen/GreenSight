import React from "react";
import "./LoginPage.css";
import Header from "./Header";
import { firebaseAppAuth, provider } from "../firebase";

export default function LoginPage() {
  const handleSignIn = () => firebaseAppAuth.signInWithPopup(provider);

  return (
    <div className="loginPage">
      <Header />
      <br />
      <br />
      <br />
      <br />
      <h1>Welcome to GreenSight!</h1>
      <h2>The app that helps you save CO2</h2>
      <br />
      <br />
      <br />
      <div class="google-btn" onClick={handleSignIn}>
        <div class="google-icon-wrapper">
          <img
            class="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </div>
        <p class="btn-text">
          <b>Sign in with google</b>
        </p>
      </div>
      <br />
    </div>
  );
}
