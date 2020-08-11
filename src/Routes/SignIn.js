import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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

export default (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isFormValid = () => {
    if (username === "" || password === "") {
      alert("All fields are required.");
      return false;
    } else {
      return true;
    }
  };
  const handleSubmit = async (e) => {
    if (isFormValid()) {
      e.preventDefault();
      try {
        const {
          data: { id, token },
        } = await api.login({
          username: username,
          password: password,
        });
        dispatch(userLogin(id, token));
        history.push("/");
      } catch (e) {
        alert("Wrong username or password");
      }
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
