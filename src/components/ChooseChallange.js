import React, { useState } from "react";
import "./chooseChallange.css";
import { database } from "../firebase";
import Dialog from "./Dialog";
import Leaf from "../components/Leaf.js";


function Challange() {
  const [isPopped, setPop] = useState(false);

  const pop = () => {
    setPop(!isPopped);
  };

  return (
    //Fragments
    <>
      {isPopped && <Dialog />}
      <div className="chooseChallenge">
        {/* <Leaf/> */}
        <h1 className="newchallenge">New Challange</h1>
        <hr />
        <div className="challanges">
          <button className="challangeBtn" onClick={pop}>
            Eat Vegetarian (31days)
          </button>
          <button className="challangeBtn" onClick={pop}>
            Take the bike to work (14days)
          </button>
          <button className="challangeBtn" onClick={pop}>
            Recycle your plastic bottles (31days)
          </button>
          <button className="challangeBtn" onClick={pop}>
            Use public transport to commute (31days)
          </button>
          <button className="challangeBtn" onClick={pop}>
            Don't fly an airplane (365days)
          </button>
        </div>
        <br />
      </div>
    </>
  );
}
export default Challange;
