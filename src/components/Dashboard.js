import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import ProgressBar from "./ProgressBar";
import "./Dashboard.css";
import leafpic from "./img/leaf.png";
import TakeChallenge from "./TakeChallenge";

import Header from "./Header";
import { database } from "../firebase";
import { render } from "@testing-library/react";
import firebase from "firebase/app";

import {ProgressBarContainer} from './newprogressbar';


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



  const handleChange = (percentRange) => {
    database
    .collection('ChallangesChosen')
    .doc('cUR3crtYYygwPdNgA0NW')
    .update({
      Progress: percentRange + 10
  })
  .then(() => {
    console.log('progress updated!');
  });
  }  

  useEffect(() => {
    database
    .collection('Users')
    .doc(email)
    .set({name: user.displayName,
          co2 : 0})
  .then(() => {
    console.log('added!');
  });
    }, [])

  return (
    <div className="Dashboard">
      <Header />
      <div className="circle">
        <img id="leafpicture" src={leafpic} alt="eco-picture" />
        <div className="textIn">
          <h1> You saved </h1>
          <h5>{co2} CO2</h5>
        </div>
      </div>
      
      <div className="progressbar">
        <h3>Track your challenges!</h3>
        <div>
          <div> {challs} </div>
        </div>
        <ProgressBarContainer onChange={handleChange} />
      </div>
      <br/>
      <br/>
    </div>
  );
        
}

