import React from "react";
import "./chooseChallange.css";

function Challange() {
  return (
    <div className="challangesContainer">
      <div className="challanges">
        <h1 className="newchallenge">Choose New Challange</h1>
        <button className="challangeBtn">Eat Vegetarian (31days)</button>

        <button className="challangeBtn">Take the bike to work (14days)</button>
        <button className="challangeBtn">
          Recycle your plastic bottles (31days)
        </button>
        <button className="challangeBtn">
          Use public transport to commute (31days)
        </button>
        <button className="challangeBtn">
          Don't fly an airplane (365days)
        </button>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Challange;
