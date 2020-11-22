import React, {useState, useEffect} from "react";
import "./Dashboard.css";
import { Route, Switch, Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import "./Dashboard.css";
import leafpic from "./leaf.png";
import PictureUploader from "./PictureUploader";
import challs, {movetheChall} from "./ChooseChallange";


import Header from "./header/Header";
import { firebaseAppAuth, database } from "../firebase";
import { render } from "@testing-library/react";



const testData = [
  { bgcolor: "#ADE7FF", completed: 60 },
  { bgcolor: "#ADE7FF", completed: 30 },
  { bgcolor: "#ADE7FF", completed: 53 },
];

export default function Dashboard() {

  // const challengelist = document.querySelector('#challange-list')


    return (
      <div className="Dashboard">
      <Header />
      <div className="circle">
        <img id="leafpicture" src={leafpic} alt="eco-picture" />
        <div className="textIn">
          <h1> You saved </h1>
           <h5>0.00 CO2</h5>
        </div>
      </div>
      <div>
//insert the chall here?
movetheChall();

      </div>
      <div className="progressbar"> 
        <h3>Track your challenges!</h3>
        {testData.map((item, idx) => (
          <ProgressBar
          key={idx}
          bgcolor={item.bgcolor}
          completed={item.completed}
          />
          ))}
      </div>
    </div>
  );
}
