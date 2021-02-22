import React from "react";
import styled from "styled-components";
import GenerateInputs from "./GenerateInputs";

const Form = styled.form`
  width: 100%;
  margin-top: 1rem;
`;

const LoginForm = () => {
  return (
    <Form>
      <GenerateInputs />
    </Form>
  );
};

export default LoginForm;
