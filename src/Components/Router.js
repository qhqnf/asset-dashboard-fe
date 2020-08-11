import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home/index";
import Dashboard from "../Routes/Dashboard/index";
import SignIn from "../Routes/SignIn";
import SignUp from "../Routes/SignUp";
import LogOut from "../Routes/Logout";

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/logout" component={LogOut} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
