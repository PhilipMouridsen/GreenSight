import React from "react";
import "./Settings.css";
import Leaf from "./Leaf.js";
import { Link } from "react-router-dom";
import { firebaseAppAuth } from "../firebase";
import "firebase/auth";

export default function settings() {
  const handleSignIn = () => firebaseAppAuth.signOut();

  return (
    <div className="settings">
      <Leaf />
      <h1>Settings </h1>
      <hr />
      <br />
      <p className="Diet">Diet Preferences</p>
      <form>
        <input
          type="radio"
          name="diet"
          id="vegan"
          value="vegan"
          className="diet-option"
        />
        <label for="vegan" className="diet-label">
          Vegan
        </label>
        <input
          type="radio"
          name="diet"
          id="vegetarian"
          value="vegetarian"
          className="diet-option"
        />
        <label for="vegetarian" className="diet-label">
          Vegetarian
        </label>
        <input
          type="radio"
          name="diet"
          id="pescetarian"
          value="pescetarian"
          className="diet-option"
        />
        <label for="pescetarian" className="diet-label">
          Pescetarian
        </label>
        <input
          type="radio"
          name="diet"
          id="omnivore"
          value="omnivore"
          className="diet-option"
        />
        <label for="omnivore" className="diet-label">
          Omnivore
        </label>
      </form>
      <p className="Transport">Transport Preferences</p>
      <form>
        <input
          type="radio"
          name="transport"
          id="car"
          value="car"
          className="transport-option"
        />
        <label for="car" className="transport-label">
          Car
        </label>
        <input
          type="radio"
          name="transport"
          id="bike"
          value="bike"
          className="transport-option"
        />
        <label for="bike" className="transport-label">
          Bike
        </label>
        <input
          type="radio"
          name="transport"
          id="public"
          value="public"
          className="transport-option"
        />
        <label for="public" className="transport-label">
          Public Transportation
        </label>
        <input
          type="radio"
          name="transport"
          id="walking"
          value="walking"
          className="transport-option"
        />
        <label for="walking" className="transport-label">
          Walking
        </label>
      </form>
      <p className="Recycle">Recycling habbits</p>
      <form>
        <input
          type="radio"
          name="recycle"
          id="none"
          value="none"
          className="recycle-option"
        />
        <label for="none" className="recycle-label">
          None
        </label>
        <input
          type="radio"
          name="recycle"
          id="bags"
          value="bags"
          className="recycle-option"
        />
        <label for="bags" className="recycle-label">
          Plastic Bags
        </label>
        <input
          type="radio"
          name="recycle"
          id="others"
          value="others"
          className="recycle-option"
        />
        <label for="others" className="recycle-label">
          Others
        </label>
        <input
          type="radio"
          name="recycle"
          id="all"
          value="all"
          className="recycle-option"
        />
        <label for="all" className="recycle-label">
          All Plastics
        </label>
      </form>
      <br />
      <Link to="/">
        <button type="button" className="logoutbtn" onClick={handleSignIn}>
          Logout
        </button>
      </Link>
      <br />
      <br />
      <br />
    </div>
  );
}
