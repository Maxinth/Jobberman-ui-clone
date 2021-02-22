import React from "react";
import { Container, LoginBox } from "./styled";
import LoginViaSocial from "./LoginViaSocial";
import ContinueBlock from "./ContinueBlock";
import LoginForm from "./LoginForm";
import TopHeading from "./TopHeading";

const LoginPage = () => {
  return (
    <Container>
      <LoginBox>
        <TopHeading />
        <LoginViaSocial />
        <ContinueBlock />
        <LoginForm />
      </LoginBox>
    </Container>
  );
};

export default LoginPage;
