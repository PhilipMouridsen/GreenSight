import React, { useState, useEffect } from "react";
import { database } from "../firebase";

export default function ChallName(props) {
  var result;
  const [challName, setChallName] = useState("");

useEffect(() => {
    database
    .collection("Users")
    .doc(props.user)
    .collection("ChosenChallenge")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        result = doc.data().chall;
        setChallName(result);
      });
    });
  console.log("updated");
}, [])
  
  return <>{challName}</>;
}
