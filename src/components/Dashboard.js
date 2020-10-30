<<<<<<< HEAD
import React from 'react'
import { Route, Switch, Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";


const testData = [
    { bgcolor: "#ADE7FF", completed: 60 },
    { bgcolor: "#ADE7FF", completed: 30 },
    { bgcolor: "#ADE7FF", completed: 53 },
  ];

export default function Dashboard() {
    return (
      <div className="App">
        <div className="App">
        {testData.map((item, idx) => (
          <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
        ))}
      </div>
      </div>
    );
  }
=======

import React from "react";
import Header from "./Header.js";
import "./Dashboard.css";

function Dashboard(){
    return(
       <div className="Dashboard"> {<Header /> }
       <div className="circle">
        <p className="textIn">
            <h1> You saved </h1>
            <h2> ****** *** CO2</h2>
        </p>

       </div>

        </div> 
    )
}

>>>>>>> 57f50392480bcd1c04aa94db2e6be7c0ef7f6322
