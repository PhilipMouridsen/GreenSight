import React, { useState, useEffect } from "react";
import { database } from "../firebase";

export default function CallDb(props) {
  const [ids, setIds] = useState([]);
  const [challs, setChalls] = useState([]);
  const [co2s, setco2] = useState([]);
  const handleChalls = (e) => setChalls(e);

  useEffect(() => {
    const fetchData = async () => {
      var dbIds = [];
      var dbChalls = [];
      var dbCo2 = [];

      await database
        .collection("Challenges")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            dbIds.push(doc.data().ChallangeID);
            dbChalls.push(doc.data().ChallengeName);
            dbCo2.push(doc.data().CO2saved);
          });
        });
      handleChalls(dbChalls);
      setIds(dbIds);
      setco2(dbCo2);
      console.log("show me id", ids);
      console.log("co2 now", dbCo2);
      console.log("chalss from TakeChallange", dbChalls);
    };
    fetchData();
  }, []);

  const [chId, setChId] = useState();

  useEffect(() => {
    const fetchData = async () => {
    var dbChoice=[];

      await database
        .collection("ChallangesChosen")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            console.log("Checking doc data now",doc.data().chID);
            dbChoice.push(doc.data().chID);
          });
          setChId(dbChoice);
        });
      console.log("which ID was chosen?", dbChoice);
    };
    fetchData();
  }, []);

  const getChallangeName = () => {
   var chosenID = chId;
    var obj = {};
    for (var i = 0; i < ids.length; i++) {
      //set the keys and values
      obj[ids[i]] = challs[i];
    }

    //shows the name of the challange based on the ID
    console.log("index", obj[chosenID]);
  };

  const giveDetails = (e) => {
    return (
      <div>
        {" "}
        {ids[e]}, {challs[e]}, {co2s[e]}
      </div>
    );
  };

  return <>{getChallangeName()}</>;
}