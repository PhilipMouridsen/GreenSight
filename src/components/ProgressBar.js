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
  


  const handleUpdate = () => {
    setProgress(percentRange < 99 ? percentRange + 7.14285714 : 100);
    props.onChange(percentRange + 7.14285714);
  
        database
          .collection("Users")
          .doc(email)
          .collection("ChosenChallenge")
          .doc(props.id)
          .update({
            Progress: percentRange,
          });
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

