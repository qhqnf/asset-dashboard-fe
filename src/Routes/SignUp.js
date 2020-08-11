import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Input from "../Components/Input";
import Button from "../Components/Btn";
import api from "../api";
import utils from "../utils";

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
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const isFormValid = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      alert("All fields are required.");
      return false;
    }
    if (!utils.isEmail(email)) {
      alert("Please add a valid email.");
      return false;
    }
    return true;
  };
  const handleSubmit = async (e) => {
    if (!isFormValid()) {
      alert("Invalid form");
      return;
    }
    e.preventDefault();
    try {
      const { status } = api.createAccount({
        username: username,
        password,
        first_name: firstName,
        last_name: lastName,
        email,
      });
      if (status === 201) {
        alert("Account created, Please sign in");
        history.push("/signin");
      }
    } catch (e) {
      alert(e);
      console.warn(e);
    }
  };
  return (
    <Container>
      <FormContainer>
        <Input
          placeholder={"Username"}
          onChange={(event) => setUsername(event.target.value)}
        />
        <Input
          placeholder={"Password"}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Input
          placeholder={"First name"}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <Input
          placeholder={"Last Name"}
          onChange={(event) => setLastName(event.target.value)}
        />
        <Input
          placeholder={"E-mail"}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button onClick={handleSubmit}>Sign Up</Button>
      </FormContainer>
    </Container>
  );
};
