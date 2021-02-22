import React from "react";
import LoginContents from "./LoginContents";
import { Container, LoginBox } from "./styled";
import loginImage from "../../assets/img-login.jpg";
import styled from "styled-components";
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100vh;
  display: none;

  @media (min-width: 900px) {
    display: block;
  }
`;

const LoginPage = () => {
  return (
    <Container>
      <LoginBox>
        <LoginContents />
      </LoginBox>
      <Image src={loginImage} alt="login" />
    </Container>
  );
};

export default LoginPage;
