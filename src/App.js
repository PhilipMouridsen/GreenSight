import React from 'react';
import './App.css';
import NavBar from './components/NavBar';


//that's where our Dashboard will leave I guess?
function App() {

    return (
      <div className="container">
        <div className="logo">LOGO</div>
        <div className="Dashboard">Dashboard</div>
        <div className="Menu">MENU</div>
        <NavBar />
      </div>

      );

  }



export default App;
