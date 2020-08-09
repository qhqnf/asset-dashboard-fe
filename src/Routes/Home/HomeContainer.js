import React from "react";
import { connect } from "react-redux";
import HomePresenter from "./HomePresenter";

const mapStateToProps = (state) => ({
  isLoggedIn: state.userReducer.isLoggedIn,
});

const HomeContainer = connect(mapStateToProps)(HomePresenter);

export default HomeContainer;
