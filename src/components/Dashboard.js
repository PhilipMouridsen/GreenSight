import React from "react";
import "./Dashboard.css";
import { Route, Switch, Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import "./Dashboard.css";
import leafpic from "./leaf.png";
import PictureUploader from "./PictureUploader";


import Header from "./header/Header";
import { firebaseAppAuth, database } from "../firebase";



const testData = [
  { bgcolor: "#ADE7FF", completed: 60 },
  { bgcolor: "#ADE7FF", completed: 30 },
  { bgcolor: "#ADE7FF", completed: 53 },
];

export default function Dashboard() {

  const challengelist = document.querySelector('#challange-list')

  // create element and render challenges 
  function renderCafe(doc)
  {
    let li = document.createElement('li');
    let name = document.createElement('span')
    let CO2 = document.createElement('span')

    li.setAttribute('data-is', doc.id);
    name.textContent = doc.data().ChallangeName;
    CO2.textContent = doc.data().CO2saved;

    li.appendChild(name);
    li.appendChild(CO2);

    challengelist.appendChild(li);
  }

  database.collection('Challenges').get().then((snapshot) => {
    snapshot.docs.forEach(doc  => {
      renderCafe(doc);
    })
  })

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
        <ul id="challange-list"></ul>
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
