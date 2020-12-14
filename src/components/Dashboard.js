import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import ProgressBar from "./ProgressBar";
import "./Dashboard.css";
import leafpic from "./img/leaf.png";
import GiveChallDetails from "./GiveChallengeDetails";
import firebase from "firebase/app";
import TakeChallenge from "./TakeChallenge";
import GetTheChosenOne from "./CallChallengeChosen";
import CallDB from "./CallDB";
import Progress from "./Progress";


import Header from "./Header";
import { render } from "@testing-library/react";

import { ProgressBarContainer } from "./newprogressbar";

export default function Dashboard() {

  var user = firebase.auth().currentUser;
  var email;

  if (user != null) {
    email = user.email;
  }

  const [challs, setChall] = useState([]);
  const [co2, setco2] = useState(0);

  const handleChall = (e) => setChall(e);
  const handleCo2 = (e) => {
    setco2(e);
    console.log("eeeeeee", e);
  };

  /*   const handleChange = (percentRange) => {
    database
    .collection('ChallangesChosen')
    .doc('29UfS8ewxO3cHFuxEUFx')
    .update({
      ProgressPercentageage: percentRange + 10
  })
  .then(() => {
    console.log('progress updated!');
  });
  }   
  
  
  below]
  
  <ProgressBarContainer onChange={handleChange} />
  */

  return (
    <div className="Dashboard">
      <Header />
      <div className="circle">
        <img id="leafpicture" src={leafpic} alt="eco-picture" />
        <div className="textIn">
          <h1> You saved </h1>
          <h5> <Progress mail={email}/> CO2</h5>
        </div>
      </div>
      <div>
        <TakeChallenge id="2" />
      </div>
      <div className="progressbar">
        <h3>Track your challenges!</h3>
        <div>
          {" "}
          <CallDB />
        </div>
        <div>
          <div> {challs} </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
