import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import WeightGraph from "../../Components/WeightGraph";

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

const GraphContainer = styled.div`
  padding: 20px;
`;

const DashboardPresenter = ({ isLoading, asset }) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <YieldContainer>
            <span>20%</span>
          </YieldContainer>
          <GraphContainer>
            <WeightGraph asset={asset} />
          </GraphContainer>
        </Container>
      )}
    </>
  );
};

export default DashboardPresenter;
