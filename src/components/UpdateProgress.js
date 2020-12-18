import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import FindId from "./FindId";

export default function Dashboard(props) {

    const [co2amount, setCo2Amount] = useState(0);
    var user = firebase.auth().currentUser;
    var email;
  
    if (user != null) {
      email = user.email;
    }

    console.log("component find id",<FindId loggedIn={email} />);
    props.amount = <FindId loggedIn={email} />;
    setCo2Amount(props.amount);
    console.log("props.amount",props.amount);
    console.log("co2amount", co2amount);
    return(
        <>
    {co2amount}
        </>
    )
}


