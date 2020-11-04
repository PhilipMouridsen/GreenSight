import React from 'react';
import "./ProgressBar.css";



const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 20,
      width: '90%',
      backgroundColor: "#f0efeb",
      borderRadius: 50,
      margin: 50,
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
    }
  
    const labelStyles = {
      padding: 8,
      color: 'black'
    }
  
    return (
     <div className="ProgressContainer">
     <div className="fuckyou" style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
        <button>+</button>
      </div>

     </div>
    );
  };
  
  export default ProgressBar;