import React, { useState, useEffect } from "react";
import './newprogressbar.css';
import {database } from "../firebase";


export default function Progress (props) {

let [progress, setProgress] = useState(0);


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

const handleUpdate = () => {
    setProgress(progress < 100 ? progress + 10 : 100);
    props.onChange(progress + 10);
}

    return (
        <div id="progresscontainer">
            <ProgressBar percentRange={progress} />
            <button id="updatepic" onClick={handleUpdate}>Daily Update</button>
        </div>
    );
};
