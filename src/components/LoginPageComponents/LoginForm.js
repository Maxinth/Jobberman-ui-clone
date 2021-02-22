import React from "react";
import styled from "styled-components";
import ButtonSection from "./ButtonSection";
import GenerateInputs from "./GenerateInputs";
import LoginCheck from "./LoginCheck";

const Form = styled.form`
  width: 100%;
  margin-top: 1rem;
`;

const LoginForm = () => {
  return (
    <Form>
      <GenerateInputs />
      <LoginCheck />
      <ButtonSection />
    </Form>
  );
};

export default LoginForm;
