import React, { useState, useEffect } from "react";
import { database } from "../firebase";

export default function Co2Consumption(props) {

  const [co2s, setco2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      var dbCo2 = [];

      await database
        .collection("Challenges")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            dbCo2.push(doc.data().CO2saved);
          });
        });
        setco2(dbCo2);
    };
    fetchData();
  }, []);


const getDetails= (e) => {
console.log(co2s[e]);
    return(
        <div> {co2s[e]}</div>
    );
}

//update function ?

  return (
    <>{getDetails(props.id)}</>
)
  
}
