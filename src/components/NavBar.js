import React from "react";
import "./navBar.css";
import home from "./img/menu-home.png";
import wrld from "./img/menu-world.png";
import plus from "./img/menu-plus.png";
import account from "./img/menu-account.png";
import settings from "./img/menu-settings.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="icons">
        <Link to="/dashboard">
          <img src={home} alt="home-button" className="icon"/>
        </Link>
      </div>

      <div className="icons">
        <Link to="/">
          <img src={wrld} alt="wrld-button" className="icon"/>
        </Link>
      </div>

      <div className="icons">
        <Link to="/Challange">
          <img src={plus} alt="plus-button" className="icon"/>
        </Link>
      </div>

      <div className="icons">
        <Link to="/userprofile">
          <img src={account} alt="account-button" className="icon"/>
        </Link>
      </div>

      <div className="icons">
        <Link to="/settings">
          <img src={settings} alt="settigns-button" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
