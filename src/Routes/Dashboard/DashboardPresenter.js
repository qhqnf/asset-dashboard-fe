import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import WeightGraph from "../../Components/WeightGraph";
import PortfolioDetail from "../../Components/PortfolioDetail";

const Container = styled.div`
  height: 100vh;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const YieldContainer = styled.div`
  width: 60%;
  height: 60px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff5a5f;
`;

const GraphContainer = styled.div`
  width: 80%;
  height: 500px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
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
            <PortfolioDetail asset={asset} />
          </GraphContainer>
        </Container>
      )}
    </>
  );
};

export default DashboardPresenter;
