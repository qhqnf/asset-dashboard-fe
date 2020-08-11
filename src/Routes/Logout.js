import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userReducer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const Text = styled.span`
  font-size: 28px;
`;

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout());
    console.log("See you again");
  });
  return (
    <Container>
      <Text>See you again!</Text>
    </Container>
  );
};
