import React, { useState, useEffect } from "react";
import { database } from "../firebase";
import Co2Cosumption from "./Co2Consumption";

function Find(props) {
  // Create a reference to the cities collection
  const [chosenId, setchosenID] = useState(0);
  const [document, setDocument] = useState("");
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
        setDocument(doc.data().DocID);
        setchosenID(chId);
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    } [Co2Cosumption]);


    
    return(
        <><Co2Cosumption id= {chosenId-1} /></>
    )
}

export default Find;
