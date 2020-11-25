import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import ProgressBar from "./ProgressBar";
import "./Dashboard.css";
import leafpic from "./img/leaf.png";

import Header from "./Header";
import { database } from "../firebase";


const testData = [
  { bgcolor: "#ADE7FF", completed: 60 },
  { bgcolor: "#ADE7FF", completed: 30 },
  { bgcolor: "#ADE7FF", completed: 53 },
];

export default function Dashboard() {
  // const challengelist = document.querySelector('#challange-list')
  const [challs, setChalls] = useState([]);
  // create element and render challenges
  // function renderCafe(doc)
  // {
  //   let li = document.createElement('li');
  //   let name = document.createElement('span')
  //   let CO2 = document.createElement('span')

  //   li.setAttribute('data-is', doc.id);
  //   name = doc.data().ChallengeName;
  //   CO2 = doc.data().CO2saved;

  //   li.appendChild(name);
  //   li.appendChild(CO2);

  //   challengelist.append(document.createElement('li'));
  //   challengelist.append(name)
  // }

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
        <ul id="challange-list">
          {challs.map((ch) => (
            <li key={ch}>{ch}</li>
          ))}
        </ul>
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
      <br />
    </div>
  );
}
