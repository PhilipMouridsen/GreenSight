import React, { Component } from "react";
import "./userprofile.css";
import "antd/dist/antd.css";
import firebase from "firebase/app";

export default function userInfo() {
  var user = firebase.auth().currentUser;
  var name, photoUrl;

  if (user != null) {
    name = user.displayName;
    photoUrl = user.photoURL;
  }

  return (
    <div className="userInfo">
      <div className="info">
        <div className="profilebox">
          <img id="profilepic" src={photoUrl} alt="profile-picture" />
          <div className="profileText">
            <h2>Name: {name}</h2>
            <h2>CO2 saved: None :D</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
