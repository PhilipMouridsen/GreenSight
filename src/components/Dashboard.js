import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import "./Dashboard.css";
import leafpic from "./img/leaf.png";
import Header from "./Header";
import { database } from "../firebase";
import firebase from "firebase/app";
import { ProgressBarContainer } from "./ProgressBar";

export default function Dashboard() {
  var user = firebase.auth().currentUser;
  var email;
  const [size, setSize] = useState([]); // add size to the component state
  var combinedConsump = 0;
  const [userSavedCo2, setUserSavedCo2] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [co2Total, setCo2Total] = useState(0);

  if (user != null) {
    email = user.email;
  }

  const handleSetSize = (e) => {
    setSize(e);
  };

  function allowProgressBar() {
    setShowProgressBar(true);
  }

  function createMultipleProgressBars() {
    return (
      <div>
        {size.map((challenge) => (
          <div key={challenge}>
            <p id="chlText">{challenge}</p>
            <ProgressBarContainer id={challenge} onChange={handleChange} />
          </div>
        ))}
      </div>
    );
  }

  //the useeffect that evokes allowProgressBar();
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
          });
        });
      handleSetSize(challs);
      if (challs.length > 0) {
        allowProgressBar();
      }
    };
    fetchData();
  }, []);

  const handleChange = () => {
  };

  //the useeffect that sets the name and co2Saved var of the logged in user, in the database
  useEffect(() => {
    database
      .collection("Users")
      .doc(email)
      .set({
        name: user.displayName,
        co2Saved: 0,
      })
      .then(() => {
        console.log("user added!");
      });
  }, []);


  //the useeffect that sets the hook co2Total to the co2Saved variable in the database of the user
  useEffect(() => {
    database
      .collection("Users")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.id === email) {
            setCo2Total(doc.data().co2Saved);
          }
        });
      });
  }, );

  //The use effect that calculates the CO2 for the circle
  useEffect(() => {
    var co2Consump = []; 
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
        setUserSavedCo2(combinedConsump);
        saveCo2InDB();
      })
  }, );

  function saveCo2InDB(){
    database
      .collection("Users")
      .doc(email)
      .set({
        co2Saved: userSavedCo2,
      })
      .then(() => {
        console.log("co2Saved added in DB");
      });
  }
  

  const renderProgressBar = () => {
    if (showProgressBar) {
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
        <div className="textIn">
          <h1> You saved </h1>
          <h5> {userSavedCo2} kg CO2</h5>
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

