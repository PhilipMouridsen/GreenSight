import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import ProgressBar from "./ProgressBar";
import "./Dashboard.css";
import leafpic from "./img/leaf.png";

import Header from "./Header";
import { database } from "../firebase";
import { render } from "@testing-library/react";

import {ProgressBarContainer} from './newprogressbar';


export default function Dashboard() {
  
  const [challs, setChall] = useState([]);
  const [co2, setco2] = useState(0);

  const handleChall = (e) => setChall(e);
  const handleCo2 = (e) => {
    setco2(e);
    console.log("eeeeeee", e)
  };

  useEffect(() => {
  database
    .collection("Challenges")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        const challenge = doc.data().ChallengeName;
        const takenco2 = doc.data().CO2saved;
        console.log(challenge);
        console.log(takenco2);
        handleChall(challenge);
        handleCo2(takenco2);
        console.log("taken co2",takenco2);
        console.log("taken challenge",challenge);

      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
  }, [])

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
      <div></div>
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

