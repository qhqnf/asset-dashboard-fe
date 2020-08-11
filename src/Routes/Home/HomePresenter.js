import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../../Components/Btn";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
`;

const BtnContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
`;

const Span = styled.span`
  font-size: 28px;
`;

const HomePresenter = ({ isLoggedIn }) => {
  return (
    <>
      <Container>
        <Span>{isLoggedIn ? "Hi" : "Welcome"}</Span>
        {isLoggedIn ? (
          <Button>Go to Dashboard</Button>
        ) : (
          <BtnContainer>
            <Button>Log in</Button>
            <Button>Sign in</Button>
          </BtnContainer>
        )}
      </Container>
    </>
  );
};

export default HomePresenter;
