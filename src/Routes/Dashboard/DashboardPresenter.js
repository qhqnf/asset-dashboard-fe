import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
  height: 100vh;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const YieldContainer = styled.div`
  width: 60%;
  height: 50px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff5a5f;
`;

const DashboardPresenter = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <YieldContainer>
            <span>20%</span>
          </YieldContainer>
        </Container>
      )}
    </>
  );
};

export default DashboardPresenter;
