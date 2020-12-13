import { Progress } from "antd";
import React, { useState, useEffect } from "react";
import { database } from "../firebase";


// save the value of co2 and print the name of the challange

export default function CallDb(props) {
    const [ids, setIds] = useState([]);


        console.log("I got into getData");
        var dbIds =[];
        //(loggedInUser) find the document that has the logged in user 
      database
        .collection("ChallangesChosen")
        .get()
        .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
            console.log("AAAAAAAAAAAA",doc.data());
            dbIds.push(doc.data().chId)
            setIds(dbIds);
            });
        })
        .catch((error) => {
          // If saving data failed, this will run and we will log an error to the console.
          // Here you should give a message to users as well!
          console.error(error.message);
        });

  return <>{ids}</>;
}
