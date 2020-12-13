import React, {useState, useEffect} from "react";
import "./Dashboard.css";
import { Route, Switch, Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import "./Dashboard.css";
import leafpic from "./img/leaf.png";
import GiveChallDetails from "./GiveChallengeDetails";
import firebase from "firebase/app";
import GetTheChosenOne from "./CallChallengeChosen";
import CallDB from "./CallDB";


import Header from "./header/Header";
import { firebaseAppAuth, database } from "../firebase";
import { render } from "@testing-library/react";


export default function Dashboard() {
  var user = firebase.auth().currentUser;
  var email;

  if (user != null) {
    email = user.email;
  }

  const [co2, setco2] = useState(0);

  const handleCo2 = (e) => {
    setco2(e);
    console.log("eeeeeee", e)
  };
//GET DATA FROM CHALLENGECHOSEN if loggedInUser is = to email from firebase

/* 
  const handleChange = (percentRange) => {
    database
    .collection('ChallangesChosen')
    .doc('cUR3crtYYygwPdNgA0NW')
    .update({
      ProgressPercentageage: percentRange + 10
  })
  .then(() => {
    console.log('progress updated!');
  });
  }  
 */

// add below <ProgressBarContainer onChange={handleChange} />
  return (
    <div className="Dashboard">
      <Header />
      <div className="circle">
        <img id="leafpicture" src={leafpic} alt="eco-picture" />
        <div className="textIn">
          <h1> You saved </h1>
           <h5>0.00 CO2</h5>
        </div>
      </div>
      <div className="progressbar">
        <h3>Track your challenges!</h3>
        <CallDB />
        <div>
          <div> <GiveChallDetails id="2"/> </div>
        </div>

      </div>
    </div>
  );     
}
