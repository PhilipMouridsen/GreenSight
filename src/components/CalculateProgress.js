import React, { useState, useEffect } from "react";
import { database } from "../firebase";

export default function CalucalteProgress(props) {
  const [document, setDocument] = useState("");
  const [currentProgress, setCurrentProgress] = useState(0);
  var user = props.loggedIn;

  const getDocId = () => {
    database
      .collection("ChallangesChosen")
      .where("Email", "==", user)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          setDocument(doc.data().DocID);
          setCurrentProgress(doc.data().Progress);
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      }, []);
      return (
        {document}
      )
  };

  const handleChange = () => {
    database
    .collection('ChallangesChosen')
    .doc(document)
    .update({
      Progress: currentProgress +10
  })
  .then(() => {
    console.log('progress updated!');
  });
  }   

  console.log("what do we return in getDocId",getDocId);

handleChange();

  return <div> </div>;
}
