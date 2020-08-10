import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Components/Input";
import Button from "../Components/Btn";

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
  return (
    <Container>
      <FormContainer>
        <Input placeholder={"username"} />
        <Input placeholder={"password"} />
        <Button>Sign Up</Button>
      </FormContainer>
    </Container>
  );
};
