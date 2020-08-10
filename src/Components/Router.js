import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./Header";
import Portfolio from "./Portfolio";
import HomeContainer from "../Routes/Home/index";
import SignIn from "../Routes/SignIn";
import SignUp from "../Routes/SignUp";

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
