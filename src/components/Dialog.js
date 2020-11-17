import React, { Component } from "react";
import "./chooseChallange.css"

class Dialog extends Component {
  render() {
    let dialog = (
      <div className="dialog">
        {this.props.children}
        <div className="buttonArea">
        <button className= "approvalButton" onClick = {this.props.onClose}> Approve </button>
        <button className= "approvalButton" onClick = {this.props.onClose}> Decline </button>
        </div>
      </div>
    );
    if (!this.props.isOpen) {
      dialog = null;
    }
    return <div>{dialog}</div>;
  }
}

export default Dialog;
