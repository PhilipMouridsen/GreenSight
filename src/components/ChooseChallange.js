import React, { useState, useEffect } from "react";
import "./chooseChallange.css";
import { database } from "../firebase";
import Dialog from "./Dialog";
import firebase from "firebase/app";

function Challange() {
  const [challs, setChalls] = useState([]);
  const [isPopped, setPop] = useState(false);
  const [co2, setco2] = useState(0);
  

  function closePopup() {
    setPop(false);
  }
    

  const plsWork = (n) =>{
    setPop(!isPopped);
    let challengeID = n;
    const theco2 = co2[n];
    const theChallName = challs[n];
    addToFire(challengeID, theco2, theChallName); 
  }

  const addToFire = (challID, co2cc, chName) => {
    var user = firebase.auth().currentUser;
    var email = user.email;
    const challName = chName;
    const co2c = co2cc;
    const progress = 0;
    const chID = challID +1; 
    database
      .collection("Users")
      .doc(email)
      .collection("ChosenChallenge")
      .doc(challName)
      .set({
        chID : chID,
        chall: challName,
        Co2Consumption: co2c,
        Progress : progress
      })
      .catch((error) => {
        console.error(error.message);
      });


  };
  

//get challange
  useEffect(() => {
    const fetchData = async () => {
      var challs = [];
      await database
        .collection("Challenges")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            challs.push(doc.data().ChallengeName);

          });
        });
      setChalls(challs);
    };
    fetchData();
  }, []);

//get co2consumption
  useEffect(() => {
    const fetchData = async () => {
      var co2 = [];
  await database
        .collection("Challenges")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            co2.push(doc.data().CO2saved);
            
          });
        });
        setco2(co2);
      };
      fetchData();
  },[] );


  return (
    <>
      {isPopped && <Dialog onClose={closePopup} />}
      <div className="challanges">
        <h1 className="newchallenge">Choose New Challange</h1>
        <button className="challangeBtn" onClick={() => plsWork(0)} >
          {challs[0]} (14days) 
        </button>
        <button className="challangeBtn" onClick={() => plsWork(1)} >
          {challs[1]} (14days)
        </button>
        <button className="challangeBtn" onClick={() => plsWork(2)} >
          {challs[2]} (14days)
        </button>
        <button className="challangeBtn" onClick={() => plsWork(3)} >
          {challs[3]} (14days)
        </button>
        <button className="challangeBtn" onClick={() => plsWork(4)} >
          {challs[4]} (14days)
        </button>
      </div>
    </>
  );
}
export default Challange;
