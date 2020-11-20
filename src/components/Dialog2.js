import React, { useState } from "react";
import "./chooseChallange.css"


function Dialog2 (){
    
    const [isOpen, setOpennes] = useState(false);

    const Close = () => isOpen(false);


        return(
            <div className="dialog">
                Do you accept the challange?
            <div className="buttonArea">
            <button className= "approvalButton" onClick = {Close}> Approve </button>
            <button className= "approvalButton" onClick = {Close}> Decline </button>
            </div>
          </div>
          
        )
    }

export default Dialog2;