import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Progressbar from "./Progressbar";
import "./Dashboard.css";
import leafpic from "./img/leaf.png";
import TakeChallenge from "./TakeChallenge";

import Header from "./Header";
import { database } from "../firebase";
import { render } from "@testing-library/react";
import firebase from "firebase/app";

import {ProgressBarContainer} from './Progressbar';


export default function Dashboard() {
  
  var user = firebase.auth().currentUser;
  var email;
  var size = [];

  if (user != null) {
    email = user.email;
  }

  const [challs, setChall] = useState([]);
  const [co2, setco2] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);

  const handleChall = (e) => setChall(e);
  const handleCo2 = (e) => {
    setco2(e);
    console.log("eeeeeee", e);
  };

  function allowProgressBar() {
    setShowProgressBar(true);
    createMultipleProgressBars();
  }

  function createMultipleProgressBars(){
    var arr=[size];
    console.log("arr size = " + size);
        var elements=[];
        for(var i=0;i<arr.length;i++){
             // push the component to elements!
            //elements.push(<ProgressBarContainer value={ arr[i] } />);
            <ProgressBarContainer onChange={handleChange} />
            console.log(elements);
        }
  }

  useEffect(() => {
    var user = firebase.auth().currentUser;
    var email = user.email;
    
    database 
    .collection('Users')
    .doc(email)
    .collection('ChosenChallenge')
    .get()
    .then(snap => {
      size = snap.size
      console.log(size);
      if (size > 0){
        allowProgressBar();
      } // will return the collection size
   });
   /*render equally as many progressbars as number in size*/
  
}, [])



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

    const renderProgressBar = ()=>{
      if(showProgressBar){
        return <ProgressBarContainer onChange={handleChange} />
      } else{
        return <p>Oh no! You have not committed to any challenges yet. Click on the + sign in the bottom to begin</p>
      }
    }

    /*<ProgressBarContainer onChange={handleChange} />*/
  return (
    <div className="Dashboard">
      <Header />
      <div className="circle">
        <img id="leafpicture" src={leafpic} alt="eco-picture" />
        <div className="textIn">
          <h1> You saved </h1>
          <h5>{co2} kg CO2</h5>
        </div>
      </div>
      <div className="progressbar">
        <h3>Track your challenges!</h3>
        <div>
        {renderProgressBar()}
        <div> {challs} </div>
        </div>
        
      </div>
      <br/>
      <br/>
    </div>
  );
          
}
