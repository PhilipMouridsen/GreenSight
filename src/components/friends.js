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
             <Link to="/userprofile">
                 <h3>ACHIEVMENTS</h3>
            </Link>
            <Link to="/friends">
                 <h3>FRIENDS</h3>
            </Link>
             </div>
             <hr/>
             <div className="friendsComponent">
             <img id="ecopicture"src={profile} alt="eco-picture" />
             <div className="textfriend">
             <p>Anna Johanson</p>
             <p>CO2 saved: ***** ***</p>
             </div>
             </div>
             <div className="friendsComponent">
             <img id="ecopicture"src={profile} alt="eco-picture" />
             <div className="textfriend">
             <p>Simona Hansen</p>
             <p>CO2 saved: ***** ***</p>
             </div>
             </div>
             <div className="friendsComponent">
             <img id="ecopicture"src={profile} alt="eco-picture" />
             <div className="textfriend">
             <p>Philip Greenberg</p>
             <p>CO2 saved: ***** ***</p>
             </div>
             </div>
             <div className="friendsComponent">
             <img id="ecopicture"src={profile} alt="eco-picture" />
             <div className="textfriend">
             <p>Bobby Marley</p>
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