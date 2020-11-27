import React from "react";
import "./userprofile.css";
import { Link } from "react-router-dom";
import eco from "./img/planet-earth.png";
import "antd/dist/antd.css";
import Leaf from "./Leaf.js";
import UserInfo from "./UserInfo";

function userProfile() {
  return (
    <div className="profile">
      <Leaf></Leaf>
      <h1>Profile</h1>
      <hr />
      <br />
      <UserInfo />
      <div className="buttons">
        <Link to="/userprofile" className="blue"> Achievements</Link>
        <Link to="/friends"> Friends</Link>
      </div>
      <hr />
      <div className="achievmentComponent">
        <img id="ecopicture" src={eco} alt="eco-picture" />
        <div className="textachievment">
          <h3>Congratulations!</h3>
          <p>You biked for the entire week! Keep it up!</p>
        </div>
      </div>
      <div className="achievmentComponent">
        <img id="ecopicture" src={eco} alt="eco-picture" />
        <div className="textachievment">
          <h3>Congratulations!</h3>
          <p>You recycled for a month! Keep it up!</p>
        </div>
      </div>
      <div className="achievmentComponent">
        <img id="ecopicture" src={eco} alt="eco-picture" />
        <div className="textachievment">
          <h3>Congratulations!</h3>
          <p>You did not use any plastic this month! Keep it up!</p>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default userProfile;
