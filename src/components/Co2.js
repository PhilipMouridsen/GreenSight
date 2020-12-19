/* import React, { useState, useEffect } from "react";
import { database } from "../firebase";

export default function Co2(props) {
  var result;
  const [co2, setCo2] = useState("");
    console.log("entered co2");
  database
    .collection("Users")
    .doc(props.user)
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        result = doc.data().co2;
        setCo2(result);
      });
    });

return <>WHATEVER {co2}</>
}
 */