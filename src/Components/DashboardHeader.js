import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 60%;
  padding: 20px;
  margin-bottom: 24px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff5a5f;
  font-size: 20px;
  color: white;
`;

const DashboardHeader = ({ asset }) => {
  let purchaseSum = 0;
  let CurrentSum = 0;
  asset.forEach((stock) => {
    purchaseSum +=
      parseInt(stock.avg_price.replace(",", "")) * stock.total_quantity;
    CurrentSum += parseInt(stock.price.replace(",", "")) * stock.total_quantity;
  });
  const totalYield = (CurrentSum / purchaseSum - 1) * 100;
  return (
    <HeaderContainer>
      <span>Yield : {totalYield.toFixed(1)} %</span>
    </HeaderContainer>
  );
};

export default DashboardHeader;
