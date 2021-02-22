import React from "react";
import { Heading } from "../ContactPageComponents/styled";
import styled from "styled-components";
import LoginViaSocial from "./LoginViaSocial";
import { SpanText } from "./styled";
import ContinueBlock from "./ContinueBlock";
import LoginForm from "./LoginForm";

const Container = styled.section`
  margin: 5rem 1rem 4rem;
  background: #fff;
  padding: 1rem 2rem;
  font-family: "Open Sans", sans-serif;
`;

const LoginBox = styled.div`
  max-width: 600px;
  border: 1px solid black;
  padding: 0.5rem 3rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${Heading} {
    margin-bottom: 1rem;
  }
`;

const LoginPage = () => {
  return (
    <Container>
      <LoginBox>
        <Heading>Log in and get productive</Heading>
        <SpanText>Use your social account to log in as a Seeker. </SpanText>
        <LoginViaSocial />
        <ContinueBlock />
        <LoginForm />
      </LoginBox>
    </Container>
  );
};

export default LoginPage;
