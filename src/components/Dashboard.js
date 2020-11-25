import React, {useState, useEffect} from "react";
import "./Dashboard.css";
import { Route, Switch, Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import "./Dashboard.css";
import leafpic from "./leaf.png";


import Header from "./header/Header";
import { firebaseAppAuth, database } from "../firebase";
import { render } from "@testing-library/react";


const testData = [
  { bgcolor: "#ADE7FF", completed: 60 },
  { bgcolor: "#ADE7FF", completed: 30 },
  { bgcolor: "#ADE7FF", completed: 53 },
];

export default function Dashboard() {

  const [selectedChalls, setChalls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      var selectedChalls = [];
      await database
        .collection("Users")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
          selectedChalls.push(doc.data().selectedChall);
          });
        });
      setChalls(selectedChalls);
    };
    fetchData();
  }, []);

  console.log(selectedChalls[0]); 

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
      </div>
      <div className="progressbar"> 
        <h3>Track your challenges!</h3>
    <div>{selectedChalls[0]}</div>
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
