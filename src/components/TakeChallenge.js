import React, { useState, useEffect } from "react";
import { database } from "../firebase";

export default function CallDb(props) {
  const [ids, setIds] = useState([]);
  const [challs, setChalls] = useState([]);
  const [co2s, setco2] = useState([]);
  const handleChalls = (e) => setChalls(e);


  useEffect(() => {
    const fetchData = async () => {
        var dbIds =[];
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
      console.log("show me id",ids);
      console.log("co2 now", dbCo2);
      console.log("chalss from TakeChallange", dbChalls);
    };
    fetchData();
  }, []);

//create a dictionary taking all
const getDetails= (e) => {
    return(
        <div> {ids[e]}, {challs[e]}, {co2s[e]}</div>
    );
}

  return (
      
    <div>
        RESULTS {getDetails(props.id)}
    </div>
)
  
}
