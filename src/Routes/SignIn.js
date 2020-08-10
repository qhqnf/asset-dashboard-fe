import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Input from "../Components/Input";
import Button from "../Components/Btn";
import { userLogin } from "../redux/userReducer";
import api from "../api";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { id, token },
      } = await api.login({
        username: username,
        password: password,
      });
      console.log(id, token);
      dispatch(userLogin(id, token));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container>
      <FormContainer>
        <Input
          placeholder={"username"}
          onChange={(event) => setUsername(event.target.value)}
        />
        <Input
          placeholder={"password"}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button onClick={handleSubmit}>Sign In</Button>
      </FormContainer>
    </Container>
  );
};
