import React, { useState, useEffect } from "react";
import { database } from "../firebase";

export default function Co2(props) {

  const [co2Total, setCo2Total] = useState("");

useEffect(() => {
    database
    .collection("Users")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        if (doc.id === props.user){
          setCo2Total(doc.data().co2);
          console.log(" co2",co2Total);
        }
      });
    });
}, [])

const co2update = () => {
  setCo2Total((prev) => prev +co2Total);
  return (
    {co2: co2Total}
  )
}
  
  return <>{co2Total}</>;
}

