import React from "react";
import profile from "./img/default-profile.jpg";
import "./userprofile.css";
import { Link } from "react-router-dom";
import Leaf from "./Leaf.js";
import UserInfo from "../components/UserInfo";

function friends() {
  return (
    <div className="profile">
      <Leaf></Leaf>
      <h1>Social</h1>
      <hr />
      <br />
      <UserInfo />
      <div className="buttons">
        <Link to="/userprofile"> Achievements</Link>
        <Link to="/friends" className="blue"> Friends</Link>
      </div>
      <hr />
      <div className="friendsComponent">
        <img id="ecopicture" src={profile} alt="eco-picture" />
        <div className="textfriend">
          <h3>Anna Johanson</h3>
          <p>CO2 saved: ***** ***</p>
        </div>
      </div>
      <div className="friendsComponent">
        <img id="ecopicture" src={profile} alt="eco-picture" />
        <div className="textfriend">
          <h3>Simona Hansen</h3>
          <p>CO2 saved: ***** ***</p>
        </div>
      </div>
      <div className="friendsComponent">
        <img id="ecopicture" src={profile} alt="eco-picture" />
        <div className="textfriend">
          <h3>Philip Greenberg</h3>
          <p>CO2 saved: ***** ***</p>
        </div>
      </div>
      <div className="friendsComponent">
        <img id="ecopicture" src={profile} alt="eco-picture" />
        <div className="textfriend">
          <h3>Bobby Marley</h3>
          <p>CO2 saved: ***** ***</p>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default friends;
