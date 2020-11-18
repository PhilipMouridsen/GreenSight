import React from "react";
import NavBar from "../NavBar.js";
import "./App.css";
import Logo from "../Banner.png";
import LoginPage from "../LoginPage/LoginPage";
import Dashboard from "../Dashboard";
import Create from "../Create";
import { Route, Switch, Link } from "react-router-dom";
import userprofile from "../userprofile";
import Settings from "../settings/Settings";
import friends from "../friends";
import Challanges from "../ChooseChallange";
import Explore from "../Explore";
import studentecco from "../studentecco";
import plasticarticle from "../plasticarticle";
import paperarticle from "../paperarticle"
import 'antd/dist/antd.css'

import ScrollToTop from "../ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <header className="App-header">
        <Link to="/">
          <img classname="logo" src={Logo} alt="logo"></img>
        </Link>
      </header>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={LoginPage} />
        <Route path="/create" component={Create} />
        <Route path="/userprofile" component={userprofile} />
        <Route path="/settings" component={Settings} />
        <Route path="/friends" component={friends} />
        <Route path="/challange" component={Challanges} />
        <Route path="/explore" component={Explore} />
        <Route path="/studentecco" component={studentecco} />
        <Route path="/plasticarticle" component={plasticarticle} />
        <Route path="/paperarticle" component={paperarticle} />
=      </Switch>
    </div>
  );
}

export default App;
