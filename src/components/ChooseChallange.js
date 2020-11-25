import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./chooseChallange.css";
import { database } from "../firebase";
import Dialog2 from "./Dialog2";

function Challange() {
  const [isPopped, setPop] = useState(false);

  const plsWork = (e) =>{
    setPop(!isPopped);
    const theOne = challs[e]
    console.log(theOne);
  }

  const [challs, setChalls] = useState([]);

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

  const addToDash = (addThatCh) => {
    const user = uuid();
    database
      .collection("Users")
      .add({
        name: user,
        selectedChall: addThatCh,
      })
      .then((newDocument) => {
        // This will run if adding data was successful
        console.log("New document created with ID: ", newDocument.id);
      })
      .catch((error) => {
        // If saving data failed, this will run and we will log an error to the console.
        // Here you should give a message to users as well!
        console.error(error.message);
      });
  };

  


  return (
    <>
      {isPopped && <Dialog2 />}
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
