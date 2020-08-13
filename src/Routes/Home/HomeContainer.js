import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import HomePresenter from "./HomePresenter";

const HomeContainer = ({ isLoggedIn }) => {
  const history = useHistory();
  const toSignUp = () => {
    history.push("/signup");
  };
  const toSignIn = () => {
    history.push("/signin");
  };
  const toDashBoard = () => {
    history.push("/dashboard");
  };
  return (
    <HomePresenter
      isLoggedIn={isLoggedIn}
      toSignUp={toSignUp}
      toSignIn={toSignIn}
      toDashBoard={toDashBoard}
    />
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.userReducer.isLoggedIn,
});

export default connect(mapStateToProps)(HomeContainer);
