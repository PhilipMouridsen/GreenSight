import React, { useState, useEffect } from "react";
import { database } from "../firebase";

export default function Co2(props) {

  const [co2, setCo2] = useState("");

useEffect(() => {
    database
    .collection("Users")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        if (doc.id == props.user){
          setCo2(doc.data().co2);
          console.log(" co2",co2);
        }
      });
    });
}, [])
  
  return <>{co2}</>;
}

