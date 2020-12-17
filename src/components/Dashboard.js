import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import leafpic from "./img/leaf.png";
import firebase from "firebase/app";
import TakeChallenge from "./TakeChallenge";
import { ProgressBarContainer } from "./newprogressbar";
import Find from "./Find";
import FindId from "./FindId";
import Progress from "./Progress";

import Header from "./Header";
import { render } from "@testing-library/react";
import CalucalteProgress from "./CalculateProgress";


export default function Dashboard() {

  var user = firebase.auth().currentUser;
  var email;

  if (user != null) {
    email = user.email;
  }


/*    const handleChange = (percentRange) => {
    firebase
    .collection('ChallangesChosen')
    .doc('29UfS8ewxO3cHFuxEUFx')
    .update({
      ProgressPercentageage: percentRange + 10
  })
  .then(() => {
    console.log('progress updated!');
  });
  }   

            <ProgressBarContainer onChange={handleChange} />
   */
  const handleChange = () => {
    <CalucalteProgress loggedIn={email} />
  }


  return (
    <div className="Dashboard">
      <Header />
      <div className="circle">
        <img id="leafpicture" src={leafpic} alt="eco-picture" />
        <div className="textIn">
          <h1> You saved </h1>
          <h5> <FindId loggedIn={email} /> CO2</h5>
        </div>
      </div>
      <div>
      </div>
      <div className="progressbar">
        <h3>Track your challenges!</h3>
        <div>
          {" "}
          <Find loggedIn={email} />
          <Progress onChange={handleChange}/>
        </div>
      </div>
    </div>
  );
}
