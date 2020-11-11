import React from 'react'
import "./Dashboard.css";
import { Route, Switch, Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import "./Dashboard.css";
import leafpic from "./leaf.png";


const testData = [
  { bgcolor: "#ADE7FF", completed: 60 },
  { bgcolor: "#ADE7FF", completed: 30 },
  { bgcolor: "#ADE7FF", completed: 53 },
];

export default function Dashboard() {
  return (
      <div className="Dashboard">
      <div className="circle">
      <img id="leafpicture" src={leafpic} alt="eco-picture" />
        <p className="textIn">
            <h1> You saved </h1>
            <h2> ****** *** CO2</h2>
        </p>
       </div>
       <div className="progressbar">
        {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
      </div>
    </div>
  );
}


