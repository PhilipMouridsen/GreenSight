import React from "react";
import NavBar from "./NavBar.js";
import "./App.css";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import Create from "./Create";
import { Route, Switch, Link } from "react-router-dom";
import userprofile from "./userprofile";
import Settings from "./Settings";
import friends from "./friends";
import Challanges from "./ChooseChallange";
import Explore from "./Explore";
import studentecco from "./studentecco";
import plasticarticle from "./plasticarticle";
import paperarticle from "./paperarticle";
import { firebaseAppAuth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "antd/dist/antd.css";

import ScrollToTop from "../ScrollToTop";

function App() {
  const [user, loading] = useAuthState(firebaseAppAuth);

  if (loading) {
    return null;
  }

  return user ? (
    <div className="Main">
      <ScrollToTop />
      <NavBar />

      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/create" component={Create} />
        <Route path="/userProfile" component={userprofile} />
        <Route path="/settings" component={Settings} />
        <Route path="/friends" component={friends} />
        <Route path="/challange" component={Challanges} />
        <Route path="/explore" component={Explore} />
        <Route path="/studentecco" component={studentecco} />
        <Route path="/plasticarticle" component={plasticarticle} />
        <Route path="/paperarticle" component={paperarticle} />
      </Switch>
    </div>
  ) : (
    <LoginPage />
  );
}

export default App;
