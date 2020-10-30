import React from "react";
import Logo from "./Banner.png";
import "./App/App.css";


function Header (){
    return(

        <div className="header">
           <img src={Logo} alt="header" />
        </div>
    )
}

export default Header;