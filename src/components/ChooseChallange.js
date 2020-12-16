import React, { useState, useEffect } from "react";
//import { v4 as uuid } from "uuid";
import "./chooseChallange.css";
import { database } from "../firebase";
import Dialog from "./Dialog";

function Challange() {
  const [challs, setChalls] = useState([]);
  const [isPopped, setPop] = useState(false);
  const [co2, setco2] = useState(0);
  const [challID, setChallID] = useState(0);


  function closePopup() {
    setPop(false);
  }
    
  const handleco2 = (e) => setco2(e);
  //console.log("lol",handleco2);


 const handleChall = (ch) => setChallID (ch);
 //console.log("ups",handleChall);


  const plsWork = (e) =>{
    setPop(!isPopped);
    const theOne = challs[e];
    const theco2 = co2[e];
    handleco2(theco2);
    addToFire(theOne);
    handleco2(co2);

    handleChall(challID);
  }

//get challange
  useEffect(() => {
    const fetchData = async () => {
      var challs = [];
      //var co2 =0;
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

  useEffect(() => {
    database
      .collection("Challenges")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(function (doc) {
          const challengeName = doc.data().ChallengeName;
          console.log(challengeName);  
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    }, [])

//get co2consumption
  useEffect(() => {
  database
        .collection("Challenges")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            const takenco2 = doc.data().CO2saved;
            console.log(takenco2);  
            console.log("taken co2", takenco2);
            handleco2(takenco2);
          });
        });
  }, []);

//get the chellange id
useEffect(() => {
  database
    .collection("Challenges")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        const challID = doc.data().ChallangeID;
        console.log(challID);  
        handleChall(challID);
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
  }, [])


   const addToFire = (addThatCh) => {
    const buttonChall = addThatCh;
    const co2c = co2;
    const chID = challID;
    const progress = 0;
    database
      .collection("ChallangesChosen")
      .add({
        chall: buttonChall,
        Co2Consumption: co2c,
        ChallangeID: chID,
        Progress : progress
      })
      .then((newDocument) => {
        //how to change the ID to not have an automatic id
        console.log("New document created with ID: ", newDocument.id );
      })
      .catch((error) => {
        console.error(error.message);
      });


  }; 
  

  return (
    <>
      {isPopped && <Dialog onClose={closePopup} />}
      <div className="challanges">
        <h1 className="newchallenge">Choose New Challange</h1>
        <button className="challangeBtn" onClick={() => plsWork(0)} >
          {challs[0]} (31days) 
        </button>
        <button className="challangeBtn" onClick={() => plsWork(1)} >
          {challs[1]} (14days)
        </button>
        <button className="challangeBtn" onClick={() => plsWork(2)} >
          {challs[2]} (31days)
        </button>
        <button className="challangeBtn" onClick={() => plsWork(3)} >
          {challs[3]} (31days)
        </button>
        <button className="challangeBtn" onClick={() => plsWork(4)} >
          {challs[4]} (365days)
        </button>
      </div>
    </>
  );
}
export default Challange;
