import React from "react";
import LoginPage from "../components/LoginPageComponents";
import TransitionBox from "./TransitionBox";
const Login = () => {
  return (
    <TransitionBox>
      <LoginPage />
    </TransitionBox>
  );
};

export default Login;
