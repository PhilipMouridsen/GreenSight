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