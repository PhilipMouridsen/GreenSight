import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import "./Dashboard.css";
import leafpic from "./img/leaf.png";
import TakeChallenge from "./TakeChallenge";
import Co2 from './Co2';


import Header from "./Header";
import { database } from "../firebase";
import { render } from "@testing-library/react";
import firebase from "firebase/app";

import { ProgressBarContainer } from "./Progressbar";

export default function Dashboard() {
  var user = firebase.auth().currentUser;
  var email;
  var size = [];

  if (user != null) {
    email = user.email;
  }

  const [showProgressBar, setShowProgressBar] = useState(false);

  function allowProgressBar() {
    setShowProgressBar(true);
    createMultipleProgressBars();
  }

  function createMultipleProgressBars() {
    var arr = [size];
    console.log("arr size = " + size);
    var elements = [];
    for (var i = 0; i < arr.length; i++) {
      // push the component to elements!
      //elements.push(<ProgressBarContainer value={ arr[i] } />);
      <ProgressBarContainer onChange={handleChange} />;
      console.log(elements);
    }
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
        size = challs;
      console.log("global size is", size)
      console.log("size.lenght is ", size.length);
      if (size.length > 0){
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
    database
      .collection("Users")
      .doc(email)
      .set({ name: user.displayName, co2: 0 })
      .then(() => {
        console.log("added!");
      });
  }, []);

  const renderProgressBar = () => {
    if (showProgressBar) {
      return <ProgressBarContainer onChange={handleChange} />;
    } else {
      return (
        <p>
          Oh no! You have not committed to any challenges yet. Click on the +
          sign in the bottom to begin
        </p>
      );
    }
  };


  /*<ProgressBarContainer onChange={handleChange} />*/
  return (
    <div className="Dashboard">
      <Header />
      <div className="circle">
        <img id="leafpicture" src={leafpic} alt="eco-picture" />
        <div className="textIn">
          <h1> You saved </h1>
          <h5><Co2 user= {email} />kg CO2</h5>
        </div>
      </div>
      <div className="progressbar">
        <h3>Track your challenges!</h3>
        <div>
          {renderProgressBar()}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
