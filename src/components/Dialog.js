import React, { useState } from "react";
import "./chooseChallange.css";
import { Link } from "react-router-dom";

function Dialog() {
  const [isOpen, setOpennes] = useState(true);

  const Close = () => {
    setOpennes(false);
  };
  return (
    <div className={isOpen ? "dialogBox" : "dialogHide"}>
      <h3 id="header">Do you accept the challange?</h3>
      <div className="guziki">
        <Link to="/dashboard">
          <button className="approvalButton" onClick={Close}>
            {" "}
            Approve{" "}
          </button>
        </Link>
        <button className="approvalButton" onClick={Close}>
          {" "}
          Decline{" "}
        </button>
      </div>
    </div>
  );
}

export default Dialog;
