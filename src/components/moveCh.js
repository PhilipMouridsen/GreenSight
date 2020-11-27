
import React, { useState, useEffect } from "react";


function getData (){
    const [challs, setChalls] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        var challs = [];
        await database
          .collection("Challenges")
          .get()
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              challs.push(doc.data().ChallengeName);
            });
          });
        setChalls(challs);
      };
      fetchData();
    }, []);
}

export default getData;