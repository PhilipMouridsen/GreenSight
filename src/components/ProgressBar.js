// ProgressBar.js

import React, { useState, useEffect } from "react";
import "./ProgressBar.css";
import { database } from "../firebase";
import Update from "./Update.js";
import firebase from "firebase/app";

export const ProgressBarContainer = (props) => {
  var user = firebase.auth().currentUser;
  var email = user.email;

  const [percentRange, setProgress] = useState(0);
  const [co2, setCo2] = useState(0);

  const handleSetCo2 = (e) => {
    setCo2(e);
  };

  //to save the progressbar level when user logs in
  useEffect(() => {
    database
      .collection("Users")
      .doc(email)
      .collection("ChosenChallenge")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          setProgress(doc.data().Progress);
        });
      });
  }, []);

  /*takes the co2consumption of the clicked document, add the co2consumption to the co2 in users */
  function calculateCO2() {
    var co2Consump = []; 
    var combinedConsump = 0;
    var i;
    database
      .collection("Users")
      .doc(email)
      .collection("ChosenChallenge")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          co2Consump.push(doc.data().Co2Consumption);
        });
        for (i = 0; i < co2Consump.length; i++) {
          combinedConsump = combinedConsump + co2Consump[i];
          
        }
        //return combinedConsump;
        console.log("this is combinedconsump", combinedConsump);
        //this is where the method originally ended

        var calculate;
        handleSetCo2(0);
        console.log("this is combined consump before calc", combinedConsump);
        calculate = combinedConsump + co2; 
        console.log("this is calculate", calculate);
        setCo2(calculate);
        database
          .collection("Users")
          .doc(email)
          .collection("ChosenChallenge")
          .get()
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              console.log(doc.id, doc.data());
              database
                .collection("Users")
                .doc(email)
                .collection("ChosenChallenge")
                .doc(props.id)
                .update({
                  Progress: percentRange,
                });
              database.collection("Users").doc(email).update({
                co2Saved: co2,
              });
            });
          });
      });
  }

  


  const handleUpdate = () => {
    setProgress(percentRange < 99 ? percentRange + 7.14285714 : 100);
    props.onChange(percentRange + 7.14285714);
    //console.log("this is in the hadndleupdate", co2, typeof co2);
    //calculateCO22();
    /*database
    .collection("Users")
    .doc(email)
    .collection("ChosenChallenge")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(doc.id, doc.data());*/
        database
          .collection("Users")
          .doc(email)
          .collection("ChosenChallenge")
          .doc(props.id)
          .update({
            Progress: percentRange,
          });
      //});
    //});
  };

  const Range = (props) => {
    return (
      <div className="range" style={{ width: `${props.percentRange}%` }} />
    );
  };

  const ProgressBar = (props) => {
    return (
      <div className="progress-bar">
        <Range percentRange={props.percentRange} />
      </div>
    );
  };

  useEffect(() => {
    database
      .collection("ChallangesChosen")
      .add({
        Progress: percentRange,
      })
      .then(() => {
        console.log("added!");
      });
  }, []);

  return (
    <div>
      <div id="progresscontainer">
        <ProgressBar percentRange={percentRange} />
        <button className="updatebtn" onClick={handleUpdate}>
          <Update />
        </button>
      </div>
    </div>
  );
};

