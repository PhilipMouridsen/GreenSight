import React, { useState, useEffect } from "react";
import { database } from "../firebase";

export default function Progress(props) {
  const [user, setUser] = useState("");
  const [progress, setProgress] = useState(0);

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
      console.log("How much progress?", dbProgress);
      console.log("which user", user);
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
