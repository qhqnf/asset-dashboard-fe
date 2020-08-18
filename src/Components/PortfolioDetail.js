import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  width: 45%;
  height: 400px;
`;

const Item = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 2px solid #cbd5e0;
`;

const Cell = styled.li`
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

const PortfolioComponent = ({ stock }) => {
  const name = stock.name;
  const total_quantity = stock.total_quantity;
  const avg_price = parseInt(stock.avg_price.replace(",", ""));
  const price = parseInt(stock.price.replace(",", ""));
  const Yield = (price / avg_price - 1) * 100;
  return (
    <Item>
      <Cell>{name}</Cell>
      <Cell>{total_quantity * avg_price}</Cell>
      <Cell>{total_quantity * price}</Cell>
      <Cell>{Yield.toFixed(1)} %</Cell>
    </Item>
  );
};

const PortfolioTotal = ({ asset }) => {
  let purchaseSum = 0;
  let CurrentSum = 0;
  asset.forEach((stock) => {
    purchaseSum +=
      parseInt(stock.avg_price.replace(",", "")) * stock.total_quantity;
    CurrentSum += parseInt(stock.price.replace(",", "")) * stock.total_quantity;
  });
  const totalYield = (CurrentSum / purchaseSum - 1) * 100;
  return (
    <Item>
      <Cell>Total</Cell>
      <Cell>{purchaseSum}</Cell>
      <Cell>{CurrentSum}</Cell>
      <Cell>{totalYield.toFixed(1)} %</Cell>
    </Item>
  );
};

const PortfolioDetail = ({ asset }) => {
  return (
    <Container>
      <Item>
        <Cell>Stock</Cell>
        <Cell>Purchase price</Cell>
        <Cell>Current price</Cell>
        <Cell>Yield</Cell>
      </Item>
      {asset.slice(1, 6).map((stock) => {
        return <PortfolioComponent stock={stock} key={stock.stock} />;
      })}
      <PortfolioTotal asset={asset} />
    </Container>
  );
};

export default PortfolioDetail;
