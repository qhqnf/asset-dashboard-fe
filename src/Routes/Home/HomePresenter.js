import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = (props) => {
  const { isLoggedIn } = props;
  /*   const { isLoggedIn } = useSelector((state) => state.userReducer); */
  const loading = false;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <span>{isLoggedIn ? "Welcome" : "Login Please"}</span>
        </Container>
      )}
    </>
  );
};

export default HomePresenter;
