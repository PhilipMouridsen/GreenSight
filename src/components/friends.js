import React from "react";
import profile from "./img/default-profile.jpg";
import "./userprofile.css";
import { Link } from "react-router-dom";

function friends() {
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
         <Link to="/achievments">
             <h3>ACHIEVMENTS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
        </Link>
        <Link to="/friends">
             <h3>FRIENDS</h3>
        </Link>
         </div>
         <hr/>
    </div>
  );
}

export default friends;