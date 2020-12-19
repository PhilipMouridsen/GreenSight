// ProgressBar.js

import React, { useState, useEffect } from "react";
import "./Progressbar.css";
import { firebaseAppAuth, database } from "../firebase";
import Update from "./Update.js";
import firebase from "firebase/app";

export const ProgressBarContainer = (props) => {
  var user = firebase.auth().currentUser;
  var email = user.email;

  /*database
    .collection("users")
    .doc(email)
    .get()
    .then((doc) => {
      if (doc.exists) {
        database
          .collection("users")
          .doc(email)
          .collection("ChosenChallenge")
          .get()
          .then((sub) => {
            if (sub.docs.length > 0) {
              console.log("subcollection exists");
            } else console.log("subcollection does not exist");
          });
      }
      else console.log("did not enter if" + email);
    });*/

  let [percentRange, setProgress] = useState(0);

  const handleUpdate = () => {
    setProgress(percentRange < 99 ? percentRange + 7.14285714 : 100);
    props.onChange(percentRange + 7.14285714);

    console.log("I'm in update");

    database
    .collection("Users")
    .doc(email)
    .collection("ChosenChallenge")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(doc.id, doc.data());
        database.collection("Users").doc(email).collection("ChosenChallenge").doc(doc.id).update({
          Progress: percentRange
        });
      });
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
    <div id="progresscontainer">
      <ProgressBar percentRange={percentRange} />
      <button className="updatebtn" onClick={handleUpdate}>
        <Update/>
      </button>
    </div>
  );
};
