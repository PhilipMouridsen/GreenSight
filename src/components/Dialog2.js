import React, { useState } from "react";
import "./chooseChallange.css"
import Challange from "./ChooseChallange"


function Dialog2(props){
    
    const [isOpen, setOpen] = useState(true);

    const Close = () => {
        setOpen(false);
        props.onClose();
    }
        return(
            <div className={isOpen ? 'dialogBox' : 'dialogHide'}>
                <h3 id="header">Do you accept the challange?</h3>
            <div className="guziki">
            <button className= "approvalButton" onClick = {Close}> Approve </button>
            <button className= "approvalButton" onClick = {Close}> Decline </button>
            </div>
          </div>
          
        )
    }

export default Dialog2;