import React, { useState } from "react";
import "./chooseChallange.css";
//import Leaf from "./Leaf.js";
//import Dialog from "./Dialog";
import { database } from "../firebase";
import Dialog2 from "./Dialog2";

//takes the data correctly, next -> make the co2 consumption go to dashboard
database
  .collection("Challenges")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      // console.log(doc.data());
    });
  });

//const [isOpen, toggled] = isOpen(false);

function Challange() {
  const [isPopped, setPop] = useState(false);

  const DialogON = () => {
    const Pop = () => { setPop(true);};
    Pop();
    console.log({isPopped});
    <div className={isPopped ? "dialogBox" : "dialogHide"}>    
    <Dialog2 />
    </div>;
  };


  return (
    <div className="challanges">
      <h1 className="newchallenge">Choose New Challange</h1>
      <button className="challangeBtn" onClick={DialogON}>
        Eat Vegetarian (31days)
      </button>
      <button className="challangeBtn" onClick={DialogON}>
        Take the bike to work (14days)
      </button>
      <button className="challangeBtn" onClick={DialogON}>
        Recycle your plastic bottles (31days)
      </button>
      <button className="challangeBtn" onClick={DialogON}>
        Use public transport to commute (31days)
      </button>
      <button className="challangeBtn" onClick={DialogON}>
        Don't fly an airplane (365days)
      </button>
    </div>
  );
}

export default Challange;
