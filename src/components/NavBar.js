import React from "react";
import "../navBar.css";
import home from "./img/menu-home.png";
import wrld from "./img/menu-world.png";
import plus from "./img/menu-plus.png";
import account from "./img/menu-account.png";
import settings from "./img/menu-settings.png";

function NavBar() {
  return (
    <div className="NavBar">
      <img src={home} alt="home-button" />
      <img src={wrld} alt="wrld-button" />
      <img src={plus} alt="plus-button" />
      <img src={account} alt="account-button" />
      <img src={settings} alt="settigns-button" />
    </div>
  );
}

export default NavBar;
