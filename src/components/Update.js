import React from "react";
import "./update.css";
import update from "./update.png";

function Update(){
    return(
        <div className="update">    
            <img id="updatepic" src={update} />   
        </div>
    );
}

export default Update;