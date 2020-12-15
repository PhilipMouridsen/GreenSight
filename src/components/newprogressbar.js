// ProgressBar.js

import React, { useState, useEffect } from "react";
import './newprogressbar.css';
import {database } from "../firebase";


export const ProgressBarContainer = (props) => {

let [progress, setProgress] = useState(0);


const handleUpdate = () => {
    setProgress(progress < 100 ? progress + 10 : 100);
    props.onChange(progress + 10);
}

const Range = (props) => {
    return (
        <div className="range" style={{width: `${props.percentRange}%`}}/>
    );
};

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <Range percentRange={props.percentRange}/>
        </div>
    );
};
//adds a new document with the only field being Progress so that's not ideal
useEffect(() => {
    database
    .collection('ChallangesChosen')
    .add({
    Progress: progress
  })
  .then(() => {
    console.log('added!');
  });
    }, [])


    return (
        <div id="progresscontainer">
            <ProgressBar percentRange={progress} />
            <button id="updatepic" onClick={handleUpdate}>Daily Update</button>
        </div>
    );
};
