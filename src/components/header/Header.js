import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Banner.png";

function Header() {
    return (
      <div className="header">
        <header className="App-header">
          <Link to="/">
            <img classname="logo" src={Logo} alt="logo"></img>
          </Link>
        </header>
        </div>
    );
}
export default Header;