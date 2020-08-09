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

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
