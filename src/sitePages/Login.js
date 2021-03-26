import React from "react";
import LoginPage from "../components/LoginPageComponents";
import TransitionBox from "./TransitionBox";
import useTitle from "../components/useTitle";

const Login = () => {
  useTitle("Log in to Your Account");
  return (
    <TransitionBox>
      <LoginPage />
    </TransitionBox>
  );
};

export default Login;
