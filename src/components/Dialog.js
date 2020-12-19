import React, { useState } from "react";
import "./chooseChallange.css";
import { Link } from "react-router-dom";


function Dialog() {
  const [isOpen, setOpen] = useState(true);

  const Declined = () => {
    setOpen(false);
  };

  const Approved = () => {
    setOpen(false);
    /*Render a progressbar in dialog*/
  }

  return (
    <div className={isOpen ? "dialogBox" : "dialogHide"}>
      <h3 id="header">Do you accept the challange?</h3>
      <div className="popupBtns">
        <Link to="/">
          <button className="approvalButton" onClick={Approved}>
            {" "}
            Approve{" "}
          </button>
        </Link>
        <button className="approvalButton" onClick={Declined}>
          {" "}
          Decline{" "}
        </button>
      </div>
    </div>
  );
}

export default Dialog;
