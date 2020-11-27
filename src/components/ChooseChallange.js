import React, { useState, useEffect } from "react";
//import { v4 as uuid } from "uuid";
import "./chooseChallange.css";
import Dialog from "./Dialog";

function Challange() {
  const [challs, setChalls] = useState([]);
  const [isPopped, setPop] = useState(false);
  const [co2, setco2] = useState(0);

  function closePopup() {
    setPop(false);
  }
    
  const handleco2 = (e) => setco2(e);

  const plsWork = (e) =>{
    setPop(!isPopped);
    const theOne = challs[e];
    const theco2 = co2[e];
    handleco2(theco2);
    addToFire(theOne);
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
            //co2.push(doc.data().CO2saved);
          });
        });
      setChalls(challs);
      //setco2(co2);
    };
    fetchData();
  }, []);

//get co2consumption
  useEffect(() => {
    const fetchData = async () => {
      var co2 =[];
      
      await database
        .collection("Challenges")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            const takenco2 = co2.push(doc.data().CO2saved);
            handleco2(takenco2);
          });
        });
        console.log("outside foreach",co2[0]);
    };
    fetchData();
  }, []);

   const addToFire = (addThatCh) => {
    const buttonChall = addThatCh;
    const co2c = co2;
    database
      .collection("Dashboard")
      .add({
        chall: buttonChall,
        Co2Consumption: co2c,
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
      {isPopped && <Dialog2 onClose={closePopup} />}
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
