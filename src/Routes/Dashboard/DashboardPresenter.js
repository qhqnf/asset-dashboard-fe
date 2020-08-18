import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import WeightGraph from "../../Components/WeightGraph";
import PortfolioDetail from "../../Components/PortfolioDetail";
import DashboardHeader from "../../Components/DashboardHeader";
import Asset from "../../Components/Asset";

const Container = styled.div`
  height: 100vh;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GraphContainer = styled.div`
  width: 80%;
  height: 500px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;

const AssetContainer = styled.div`
  width: 80%;
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
          <DashboardHeader asset={asset} />
          <GraphContainer>
            <WeightGraph asset={asset} />
            <PortfolioDetail asset={asset} />
          </GraphContainer>
          <AssetContainer>
            <Asset asset={asset} />
          </AssetContainer>
        </Container>
      )}
    </>
  );
};

export default DashboardPresenter;
