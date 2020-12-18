// ProgressBar.js

import React, { useState, useEffect } from "react";
import './newprogressbar.css';
import { firebaseAppAuth, database } from "../firebase";


export const ProgressBarContainer = (props) => {

let [percentRange, setProgress] = useState(0);


const handleUpdate = () => {
    setProgress(percentRange < 99 ? percentRange + 7.14285714 : 100);
    props.onChange(percentRange + 7.14285714);
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

useEffect(() => {
    database
    .collection('ChallangesChosen')
    .add({
    Progress: percentRange
  })
  .then(() => {
    console.log('added!');
  });
    }, [])


    return (
        <div id="progresscontainer">
            <ProgressBar percentRange={percentRange} />
            <button id="updatepic" onClick={handleUpdate}>Daily Update</button>
        </div>
    );
};
