import React from "react";
import { Heading } from "../ContactPageComponents/styled";
import styled from "styled-components";
import SocialIcon from "./SocialIcon";

const Container = styled.section`
  margin: 5rem 1rem 4rem;
  background: #fff;
  padding: 1rem 2rem;
  font-family: "Open Sans", sans-serif;
`;
const LoginForm = styled.form``;
const LoginBox = styled.div`
  max-width: 600px;
  border: 1px solid black;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${Heading} {
    margin-bottom: 1rem;
  }
`;

const SpanText = styled.span`
  color: rgb(78, 85, 89);
  font-size: 0.9rem;
`;

const LoginPage = () => {
  return (
    <Container>
      <LoginBox>
        <Heading>Log in and get productive</Heading>
        <SpanText>Use your social account to log in as a Seeker. </SpanText>
        <SocialIcon />
      </LoginBox>
    </Container>
  );
};

export default LoginPage;
