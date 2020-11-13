import React, { Component } from "react";

class Dialog extends Component {
  render() {
    let dialog = (
      <div>
        <div>{this.props.children}</div>
        <button onClick = {this.props.onClose}> Approve </button>
        <button onClick = {this.props.onClose}> Decline </button>
      </div>
    );
    if (!this.props.isOpen) {
      dialog = null;
    }
    return <div>{dialog}</div>;
  }
}

export default Dialog;
