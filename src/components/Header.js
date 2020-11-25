import React from "react";
import { Link } from "react-router-dom";
import Logo from "./img/Banner.png";

function Header() {
    return (
      <div className="header">
        <header className="App-header">
          <Link to="/dashboard">
            <img className="logo" src={Logo} alt="logo"></img>
          </Link>
        </header>
        </div>
    );
}
export default Header;