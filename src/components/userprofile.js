import React, { Component } from "react";
import profile from "./img/default-profile.jpg";
import "./userprofile.css";
import { Link } from "react-router-dom";
import eco from "./img/planet-earth.png";
import 'antd/dist/antd.css'
import {Avatar} from 'antd';
import PictureUploader from "./PictureUploader";
import Philip from "../profilepics/philip.jpg";
import Simona from "../profilepics/Simona.jpg";
import ania from "../profilepics/ania.jpg";
import Leaf from "./Leaf.js";

class userprofile extends Component {
  
  constructor(props){
    super(props);
    this.state={
      profileImage: ''
    }
  }

  handleImageChange = (profileImage) => {
    this.setState({
      profileImage
    })
  }
  
  render(){
  return (
    <div className="profile"><Leaf></Leaf>
      <h1>Profile</h1>
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
      <div className="buttons"> Achievements
        <Link to="/userprofile"> 
        </Link>
        <Link to="/friends"> Friends
        </Link>
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
}

export default userprofile;
