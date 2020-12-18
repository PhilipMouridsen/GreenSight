import React, { useState, useEffect } from "react";
import './Progress.css';
import {database } from "../firebase";
import UpdateProgress from "./UpdateProgress";

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
    setProgress(294);
    return (
        <div className="filler" style={{width: progress}} >
            
        </div>
    );
}

const updateProgress = (oneDay) => {

//oneDay will be co2 from that challange
<UpdateProgress amount={oneDay}/>
}

    return (
        <div id="progresscontainer">
            <ProgressBar />
            <button className="update-button" onChange={updateProgress()}>Update</button>
        </div>
    );
};
