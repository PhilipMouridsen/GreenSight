import React, { useState } from "react";
import "./chooseChallange.css"


function Dialog2 (){
    
    const [isOpen, setOpennes] = useState(false);

        return(
            <div className="dialog">
                Do you accept the challange?
            <div className="buttonArea">
            <button className= "approvalButton" onClick = {setOpennes = false}> Approve </button>
            <button className= "approvalButton" onClick = {setOpennes = false}> Decline </button>
            </div>
          </div>
          
        )
    }

export default Dialog2;