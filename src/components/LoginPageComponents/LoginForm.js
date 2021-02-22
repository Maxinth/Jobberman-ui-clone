import React from "react";
import { Form } from "./styled";
import ButtonSection from "./ButtonSection";
import GenerateInputs from "./GenerateInputs";
import LoginCheck from "./LoginCheck";

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
