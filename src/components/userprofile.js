import React, { Component } from "react";
import "./userprofile.css";
import { Link } from "react-router-dom";
import eco from "./img/planet-earth.png";
<<<<<<< HEAD
import "antd/dist/antd.css";
=======
import 'antd/dist/antd.css'
import {Avatar} from 'antd';
import PictureUploader from "./PictureUploader";
import Philip from "../profilepics/philip.jpg";
import Simona from "../profilepics/Simona.jpg";
import ania from "../profilepics/ania.jpg";
>>>>>>> parent of 77e8803... popup working
import Leaf from "./Leaf.js";
import UserInfo from "../components/UserInfo";

function userProfile() {
  return (
    <div className="profile">
      <Leaf></Leaf>
      <h1>Profile</h1>
      <hr />
      <br />
      <UserInfo />
      <div className="buttons">
        {" "}
        Achievements
        <Link to="/userprofile"></Link>
        <Link to="/friends"> Friends</Link>
      </div>
      <hr />
      <div className="schievmentComponent">
        <img id="ecopicture" src={eco} alt="eco-picture" />
        <div className="textachievment">
          <h3>Congratulations!</h3>
          <p>You biked for the entire week! Keep it up!</p>
        </div>
      </div>
      <div className="schievmentComponent">
        <img id="ecopicture" src={eco} alt="eco-picture" />
        <div className="textachievment">
          <h3>Congratulations!</h3>
          <p>You recycled for a month! Keep it up!</p>
        </div>
      </div>
      <div className="schievmentComponent">
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
