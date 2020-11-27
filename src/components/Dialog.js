import React, { useState } from "react";
import "./chooseChallange.css";

function Dialog() {
  const [isOpen, setOpennes] = useState(true);

  const Close = () => {
    setOpennes(false);
  };

  return (
    <div className={isOpen ? "dialogBox" : "dialogHide"}>
      <h3 id="header">Do you accept the challange?</h3>
      <div className="approvalButtons">
        <button className="approvalButton" onClick={Close}>
          {" "}
          Approve{" "}
        </button>
        <button className="approvalButton" onClick={Close}>
          {" "}
          Decline{" "}
        </button>
      </div>
    </div>
  );
}

export default Dialog;
