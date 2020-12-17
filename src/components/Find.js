import React, { useState, useEffect } from "react";
import { database } from "../firebase";
import TakeChallenge from "./TakeChallenge";

function Find(props) {
  // Create a reference to the cities collection
  const [chosenId, setchosenID] = useState(0);
  var user = props.loggedIn;

  database
    .collection("ChallangesChosen")
    .where("Email", "==", user)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        var chId = doc.data().chID;
        console.log("getting chID here: ",chId);
        setchosenID(chId);
        console.log("check for set", chosenId);
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    } [TakeChallenge]);
    return(
        <><TakeChallenge id={chosenId -1} /></>
    )
}

export default Find;
