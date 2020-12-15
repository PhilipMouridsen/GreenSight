import React, { useState, useEffect } from "react";
import { database } from "../firebase";

export default function Progress(props) {
  const [user, setUser] = useState("");
  const [progress, setProgress] = useState(0);
//find a way to filter through the documents and print out information only relevant for them
//or alternatively maybe print out details for the latest added doument? but I don't know if they are created chronologically
  useEffect(() => {
    const fetchData = async () => {
      var dbProgress = 0;
      var dbMail = "";
      await database
        .collection("ChallangesChosen")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            console.log("Checking doc data in PROGRESS", doc.data().Email);
            dbMail = doc.data().Email;
            dbProgress = doc.data().Progress;
          });
          setProgress(dbProgress);
          console.log("dbProgress", progress);
          setUser(dbMail);
        });

    };
    fetchData();
  }, []);

  const getChallForUser = (tempMail) => {
   
   console.log("tempMail", tempMail);
   console.log("User in get", user);
    if (tempMail = user){
        return(
            progress
        )
    }
  }

return <>{getChallForUser(props.mail)}</>;
}
