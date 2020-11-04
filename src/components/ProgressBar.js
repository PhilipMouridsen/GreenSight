import React from 'react';
import "./ProgressBar.css";



const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 20,
      width: '50%',
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
      <div className="fuckyou" style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;