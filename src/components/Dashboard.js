import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import "./Dashboard.css";
import leafpic from "./img/leaf.png";
import TakeChallenge from "./TakeChallenge";

import Header from "./Header";
import { database } from "../firebase";
import { render } from "@testing-library/react";
import firebase from "firebase/app";

import { ProgressBarContainer } from "./ProgressBar";

export default function Dashboard() {
  var user = firebase.auth().currentUser;
  var email;
  const [size, setSize] = useState([]); // add size to the component state

  if (user != null) {
    email = user.email;
  }

  const [showProgressBar, setShowProgressBar] = useState(false);
  const [co2Total, setCo2Total] = useState(0);

  const handleSetSize = (e) => {
    setSize(e);
  };

  function allowProgressBar() {
    setShowProgressBar(true);
    createMultipleProgressBars();
  }

  function createMultipleProgressBars() {
    return (
      <div>
        {size.map((challenge) => (
          <div key={challenge}>
            <p id="chlText">{challenge}</p>
            <ProgressBarContainer id="chlBar" onChange={handleChange} />
          </div>
        ))}
      </div>
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      var challs = [];
      await database
        .collection("Users")
        .doc(email)
        .collection("ChosenChallenge")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            challs.push(doc.data().chall);
            console.log("this is from .then", challs);
          });
        });
      handleSetSize(challs); // update size value;
      console.log("global size is", size);
      console.log("size.lenght is ", size.length);
      if (challs.length > 0) {
        allowProgressBar();
      }
    };
    fetchData();
  }, []);

  const handleChange = () => {
    /* database
    .collection('ChallangesChosen')
    .doc('cUR3crtYYygwPdNgA0NW')
    .update({
      Progress: percentRange + 10
  })
  .then(() => {
    console.log('progress updated!');
  }); */
  };

  useEffect(() => {
/*     database
      .collection("Users")
      .doc(email)
      .set({ name: user.displayName, co2: 0 })
      .then(() => {
        console.log("added!");
      });
 */
    database
      .collection("Users")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.id === email) {
            setCo2Total(doc.data().co2);
            console.log(" co2TOtal", co2Total);
          }
        });
      });

  }, []);

  const renderProgressBar = () => {
    if (showProgressBar) {
      //return <ProgressBarContainer onChange={handleChange} />;
      return createMultipleProgressBars();
    } else {
      return (
        <p>
          Oh no! You have not committed to any challenges yet. Click on the +
          sign in the bottom to begin
        </p>
      );
    }
  };


  return (
    <div className="Dashboard">
      <Header />
      <div className="circle">
        <img id="leafpicture" src={leafpic} alt="eco-picture" />
        <div className="textIn" onClick={handleChange}>
          <h1> You saved </h1>
          <h5> {co2Total} kg CO2</h5>
        </div>
      </div>
      <div className="progressbar">
        <h3 id="trackChl">Track your challenges!</h3>
        <div>{renderProgressBar()}</div>
      </div>
      <br />
      <br />
    </div>
  );
}
