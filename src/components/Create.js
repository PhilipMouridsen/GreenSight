import React from "react";
import { Link } from "react-router-dom";
import "./Create.css";

function Create() {
  return (
    <div className="create">
      <h1>First tell us something about yourself </h1>
      <h2>How do you usually commute?</h2>

      <div className="questions">
        <button id="question">Bike</button>
        <button id="question">Train</button>
      </div>
      
      <div className="questions">
      <button id="question">Walk</button>
      <button id="question">Public tansportation</button>
      </div>

      <button className="Next">Next</button>

    </div>
  );
}

export default Create;
