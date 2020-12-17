import React, { useState, useEffect } from "react";
import './Progress.css';
import {database } from "../firebase";


export default function Progress (props) {

const [progress, setProgress] = useState(0);


const ProgressBar = () => {
    return (
        <div className="progress-bar">
            <Filler percent={progress} />
        </div>
    );
};

const Filler = (props) => {
    setProgress(100);
    return (
        <div className="filler" style={{width: progress}} >
            
        </div>
    );
}

    return (
        <div id="progresscontainer">
            <ProgressBar />
        </div>
    );
};
