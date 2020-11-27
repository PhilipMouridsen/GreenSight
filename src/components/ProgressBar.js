import React from "react";
import "./ProgressBar.css";
import Update from "./Update.js";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: "85%",
    backgroundColor: "#f0efeb",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 8,
    color: "black",
  };

  return (
    <div className="barAndBtn">
      <div className="bars" style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
      <button className="updatebtn">
        <Update></Update>
      </button>
    </div>
  );
};

export default ProgressBar;
