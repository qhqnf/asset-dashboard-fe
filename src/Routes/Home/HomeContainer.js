import React from "react";
import { connect } from "react-redux";
import HomePresenter from "./HomePresenter";

const HomeContainer = ({ isLoggedIn }) => {
  return <HomePresenter isLoggedIn={isLoggedIn} />;
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.userReducer.isLoggedIn,
});

export default connect(mapStateToProps)(HomeContainer);
