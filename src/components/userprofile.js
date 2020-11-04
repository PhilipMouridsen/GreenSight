import React from "react";
import profile from "./img/default-profile.jpg";
import "./userprofile.css";


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
             <button>ACHIEVMENTS</button>
             <button>FRIENDS</button>
         </div>
    </div>
  );
}

export default userprofile;
