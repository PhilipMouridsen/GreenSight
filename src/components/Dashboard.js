
import React from "react";
import Header from "./Header.js";
import "./Dashboard.css";

function Dashboard(){
    return(
       <div className="Dashboard"> {<Header /> }
       <div className="circle">
        <p className="textIn">
            <h1> You saved </h1>
            <h2> ****** *** CO2</h2>
        </p>

       </div>

        </div> 
    )
}

