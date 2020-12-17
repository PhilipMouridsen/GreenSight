import React, { useState, useEffect, useCallback } from "react";
//import { v4 as uuid } from "uuid";
import "./chooseChallange.css";
import { database } from "../firebase";
import Dialog from "./Dialog";
import firebase from "firebase/app";

function Challange() {
  const [challs, setChalls] = useState([]);
  const [isPopped, setPop] = useState(false);
  //const [challIDs, setChallID] = useState([]);

  const addToFire = (addThatCh) => {
    var user = firebase.auth().currentUser;
    var email;

    if (user != null) {
      email = user.email;
    }
    const chID = addThatCh + 1;
    database
      .collection("ChallangesChosen")
      .add({
        chID: chID,
        Email: email,
        DocID: "",
        Progress: 0
      })
      .then((newDocument) => {
        //how to change the ID to not have an automatic id
        var newDocID = newDocument.id;
        console.log("New document created with ID: ", newDocID);
        database
        .collection("ChallangesChosen")
        .doc(newDocID)
        .update({
          DocID: newDocID,
        })
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  function closePopup() {
    setPop(false);
  }


  //getChallangeNames for buttons
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

  //chall ids here 
  useEffect(() => {
    database
      .collection("Challenges")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(function (doc) {
          let dbchallID = doc.data().ChallangeID;
          console.log("DB CHALL IDS", dbchallID);
          //in here prints one by one, not adding to an array
          //setChallID([...challIDs, dbchallID]);
        });
        //console.log("inner",challIDs);
        //we need to add shit to dbchallIDs to creat an array
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const plsWork = (e) => {
    setPop(!isPopped);
    let temp = e;
    addToFire(temp);
    //set id and send, get document id that was created and add it in db
  };

  return (
    <>
      {isPopped && <Dialog onClose={closePopup} />}
      <div className="challanges">
        <h1 className="newchallenge">Choose New Challange</h1>
        <button className="challangeBtn" onClick={() => plsWork(0)}>
          {challs[0]} (31days)
        </button>
        <button className="challangeBtn" onClick={() => plsWork(1)}>
          {challs[1]} (14days)
        </button>
        <button className="challangeBtn" onClick={() => plsWork(2)}>
          {challs[2]} (31days)
        </button>
        <button className="challangeBtn" onClick={() => plsWork(3)}>
          {challs[3]} (31days)
        </button>
        <button className="challangeBtn" onClick={() => plsWork(4)}>
          {challs[4]} (365days)
        </button>
      </div>
    </>
  );
}
export default Challange;
