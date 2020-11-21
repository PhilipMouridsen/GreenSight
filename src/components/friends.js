import React from "react";
import profile from "./img/default-profile.jpg";
import "./userprofile.css";
import { Link } from "react-router-dom";
import Leaf from "./Leaf.js";
<<<<<<< HEAD
import UserInfo from "../components/UserInfo";

function friends() {
  return (
    <div className="profile">
      {" "}
      <Leaf></Leaf>
      <h1>Social</h1>
      <hr />
=======

function friends() {
  return (
        <div className="profile"> <Leaf></Leaf>
          <h1>Social</h1>
          <hr/>
          <br />
             <div className="info">
               <div className="profilebox">
             <img id="profilepic" src={profile} alt="profile-picture" />
             <div className="text">
             <h2>Name</h2>
             <h2>Surname</h2>
             <h2>CO2 saved</h2>
             </div>
             </div>
             </div>
             <div className="buttons"> 
             <Link to="/userprofile"> Achievements
            </Link>
            <Link to="/friends"> Friends
            </Link>
             </div>
             <hr/>
             <div className="friendsComponent">
             <img id="ecopicture"src={profile} alt="eco-picture" />
             <div className="textfriend">
             <h3>Anna Johanson</h3>
             <p>CO2 saved: ***** ***</p>
             </div>
             </div>
             <div className="friendsComponent">
             <img id="ecopicture"src={profile} alt="eco-picture" />
             <div className="textfriend">
             <h3>Simona Hansen</h3>
             <p>CO2 saved: ***** ***</p>
             </div>
             </div>
             <div className="friendsComponent">
             <img id="ecopicture"src={profile} alt="eco-picture" />
             <div className="textfriend">
             <h3>Philip Greenberg</h3>
             <p>CO2 saved: ***** ***</p>
             </div>
             </div>
             <div className="friendsComponent">
             <img id="ecopicture"src={profile} alt="eco-picture" />
             <div className="textfriend">
             <h3>Bobby Marley</h3>
             <p>CO2 saved: ***** ***</p>
             </div>
             </div>
             <br />
      <br />
>>>>>>> parent of 77e8803... popup working
      <br />
      <UserInfo />
      <div className="buttons">
        <Link to="/userprofile"> Achievements</Link>
        <Link to="/friends"> Friends</Link>
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
