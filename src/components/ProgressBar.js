import React from 'react';
import "./ProgressBar.css";



const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 20,
      width: '85%',
      backgroundColor: "#f0efeb",
      borderRadius: 50,
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
     <div className="bars" style={containerStyles}> 
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}<button className="updatebtn"></button>
</span> 
        </div>
      </div>
    );
  };
  
  export default ProgressBar;