import React from "react";
import profile from "./img/default-profile.jpg";
import "./userprofile.css";
import { Link } from "react-router-dom";
import Leaf from "./Leaf.js";
import UserInfo from "../components/UserInfo";

import Philip from "./img/Philip.jpg";
import Simona from "./img/Simona.jpg";
import ania from "./img/Anna.jpg";
import Bobby from "./img/Bobby.jpg";

function friends() {
  return (
    <div className="profile">
      <Leaf />
      <h1 className="title">Social</h1>
      <br />
      <br />
      <hr />
      <UserInfo />
      <div className="buttons">
        <Link to="/userprofile" className="notBlue">
          <div className="buttonDiv">Achievements</div>
        </Link>
        <Link to="/friends" className="blue">
          <div className="buttonDiv">Friends</div>
        </Link>
      </div>
      <hr className="line" />
      <div className="friendsComponent">
        <img id="ecopicture" src={ania} alt="eco-picture" />
        <div className="textfriend">
          <h3 className="name">Anna Johanson</h3>
          <p>CO2 saved: 256</p>
        </div>
      </div>
      <div className="friendsComponent">
        <img id="ecopicture" src={Simona} alt="eco-picture" />
        <div className="textfriend">
          <h3 className="name">Simona Hansen</h3>
          <p>CO2 saved: 490</p>
        </div>
      </div>
      <div className="friendsComponent">
        <img id="ecopicture" src={Philip} alt="eco-picture" />
        <div className="textfriend">
          <h3 className="name">Philip Greenberg</h3>
          <p>CO2 saved: 859</p>
        </div>
      </div>
      <div className="friendsComponent">
        <img id="ecopicture" src={Bobby} alt="eco-picture" />
        <div className="textfriend">
          <h3 className="name">Bobby Marley</h3>
          <p>CO2 saved: 420</p>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default friends;
