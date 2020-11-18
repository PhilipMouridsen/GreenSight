import React, { Component } from "react";
import "./chooseChallange.css";
import Dialog from "./Dialog";
import { firebaseAppAuth, database }  from "../firebase"

database.collection('Challenges').get().then((snapshot) => {
  snapshot.docs.forEach(doc  => {
    console.log(doc.data());
  })
})
//const [isOpen, toggled] = isOpen(false);

class Challange extends Component {
  state = {
    isOpen: false,
  };


  render() {
    return (
      <div className="challanges">
        <h1 className="newchallenge">Choose New Challange</h1>
        <button
          className="challangeBtn"
          onClick={ (e) => this.setState({ isOpen: true })}
        >
          Eat Vegetarian (31days)
        </button>
        <button className="challangeBtn" onClick={ (e) => this.setState({ isOpen: true })}>Take the bike to work (14days)</button>
        <button className="challangeBtn" onClick={ (e) => this.setState({ isOpen: true })}>
          Recycle your plastic bottles (31days)
        </button>
        <button className="challangeBtn" onClick={ (e) => this.setState({ isOpen: true })}>
          Use public transport to commute (31days)
        </button>
        <button className="challangeBtn"onClick={ (e) => this.setState({ isOpen: true })}>
          Don't fly an airplane (365days)
        </button>

       <div className="dialogBox" > <Dialog isOpen={this.state.isOpen} onClose = {(e) => this.setState({isOpen: false})}>Do you accept the challange?</Dialog> </div>  
      </div>
    );
  }
}

export default Challange;
