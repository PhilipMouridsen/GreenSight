import React, { useState } from "react";
import "./chooseChallange.css"


function Dialog2 (){
    
    const [isOpen, setOpennes] = useState(true);

    const Close = () => {
        console.log("reached Dialog2");
        setOpennes(false);
    }

        return(
            <div className={isOpen ? "dialogBox" : "dialogHide"}>
                Do you accept the challange?
            <div className="buttonArea">
            <button className= "approvalButton" onClick = {Close}> Approve </button>
            <button className= "approvalButton" onClick = {Close}> Decline </button>
            </div>
          </div>
          
        )
    }

export default Dialog2;