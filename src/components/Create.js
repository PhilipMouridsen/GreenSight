import React from "react";
import "./Create.css";

function Create() {
  return (
    <div className="create">
      <h1>First tell us something about yourself </h1>
      <h2 classname="subtext">How do you usually commute?</h2>

      <div className="questions">
        <button id="question">Bike</button>
        <button id="question">Train</button>
      </div>

      <div className="questions">
        <button id="question">Walk</button>
        <button id="question">Public tansportation</button>
      </div>

      <button className="Next">Next</button>

      <div className="threeCircles">
        <div className="progressCircle" id="current"></div>
        <div className="progressCircle"></div>
        <div className="progressCircle"></div>
      </div>
    </div>
  );
}

export default Create;
