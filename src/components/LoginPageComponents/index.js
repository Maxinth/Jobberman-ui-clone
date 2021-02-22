import React from "react";
import { Container, Image } from "./styled";
import loginImage from "../../assets/img-login.jpg";
import LoginMain from "./LoginMain";

const LoginPage = () => {
  return (
    <Container>
      <LoginMain />
      <Image src={loginImage} alt="login" />
    </Container>
  );
};

export default LoginPage;
