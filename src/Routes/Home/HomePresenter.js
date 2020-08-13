import React from "react";
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

const HomePresenter = ({ isLoggedIn, toSignIn, toSignUp, toDashBoard }) => {
  return (
    <>
      <Container>
        <Span>{isLoggedIn ? "Hi" : "Welcome"}</Span>
        {isLoggedIn ? (
          <BtnContainer>
            <Button onClick={toDashBoard}>Go to Dashboard</Button>
          </BtnContainer>
        ) : (
          <BtnContainer>
            <Button onClick={toSignIn}>Sign in</Button>
            <Button onClick={toSignUp}>Sign Up</Button>
          </BtnContainer>
        )}
      </Container>
    </>
  );
};

export default HomePresenter;
