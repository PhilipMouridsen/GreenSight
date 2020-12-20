import React from "react";
import "./leaf.css";
import leaf from "./img/leaf.png";

function Leaf() {
  return (
    <div className="leaf">
      <img id="leafpic" src={leaf} />
    </div>
  );
}

export default Leaf;
