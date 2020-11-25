import React, { useState, useEffect } from "react";
import "./chooseChallange.css";
import { database } from "../firebase";
import Dialog2 from "./Dialog2";

function Challange() {
  const [isPopped, setPop] = useState(false);

  const pop = () => {
    setPop(!isPopped);
    console.log("pop")
  };


  const plsWork = (e) =>{
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


  return (
    <>
      {isPopped && <Dialog2 />}
      <div className="challanges">
        <h1 className="newchallenge">Choose New Challange</h1>
        <button className="challangeBtn" onClick={plsWork(0)} >
          {challs[0]} (31days)
        </button>
        <button className="challangeBtn" onClick={plsWork(1)} >
          {challs[1]} (14days)
        </button>
        <button className="challangeBtn" onClick={pop} >
          {challs[2]} (31days)
        </button>
        <button className="challangeBtn" onClick={pop} >
          {challs[3]} (31days)
        </button>
        <button className="challangeBtn" onClick={pop} >
          {challs[4]} (365days)
        </button>
      </div>
    </>
  );
}

export default Challange;
