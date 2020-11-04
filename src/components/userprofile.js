import React from "react";
import profile from "./img/default-profile.jpg";
import "./userprofile.css";
import { Link } from "react-router-dom";
import eco from "./img/planet-earth.png";


function userprofile() {
  return (
    <div className="profile">
         <div className="info">
         <img id="profilepic" src={profile} alt="profile-picture" />
         <div className="text">
         <h2>Name</h2>
         <h2>Surname</h2>
         </div>
         </div>
         <div className="buttons">
         <Link to="/userprofile">
             <h3>ACHIEVMENTS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
        </Link>
        <Link to="/friends">
             <h3>FRIENDS</h3>
        </Link>
         </div>
         <hr/>
         <div className="schievmentComponent">
         <img id="ecopicture"src={eco} alt="eco-picture" />
         <div className="textachievment">
         <h3>Congratulations!</h3>
         <p>You biked for the entire week! Keep it up!</p>
         </div>
         </div>
         <div className="schievmentComponent">
         <img id="ecopicture"src={eco} alt="eco-picture" />
         <div className="textachievment">
         <h3>Congratulations!</h3>
         <p>You recycled for a month! Keep it up!</p>
         </div>
         </div>
         <div className="schievmentComponent">
         <img id="ecopicture"src={eco} alt="eco-picture" />
         <div className="textachievment">
         <h3>Congratulations!</h3>
         <p>You did not use any plastic this month! Keep it up!</p>
         </div>
         </div>
    </div>
  );
}

export default userprofile;
