import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  width: 80%;
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
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

const AssetComponent = ({ stock }) => {
  const code = stock.stock;
  const name = stock.name;
  const total_quantity = stock.total_quantity;
  const avg_price = parseInt(stock.avg_price.replace(",", ""));
  const current_price = parseInt(stock.price.replace(",", ""));
  return (
    <Item>
      <Cell>{code}</Cell>
      <Cell>{name}</Cell>
      <Cell>{total_quantity} 주</Cell>
      <Cell>{avg_price}</Cell>
      <Cell>{current_price}</Cell>
    </Item>
  );
};

const Asset = ({ asset }) => {
  return (
    <Container>
      <Item>
        <Cell>Stock code</Cell>
        <Cell>Name</Cell>
        <Cell>Quantity</Cell>
        <Cell>Avg. purchase price</Cell>
        <Cell>Current price</Cell>
      </Item>
      {asset.map((stock) => {
        return <AssetComponent stock={stock} key={stock.stock} />;
      })}
    </Container>
  );
};

export default Asset;
