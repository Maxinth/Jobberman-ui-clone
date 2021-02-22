import React from "react";
import LoginViaSocial from "./LoginViaSocial";
import ContinueBlock from "./ContinueBlock";
import LoginForm from "./LoginForm";
import TopHeading from "./TopHeading";

const LoginContents = () => {
  return (
    <>
      <TopHeading />
      <LoginViaSocial />
      <ContinueBlock />
      <LoginForm />
    </>
  );
};

export default LoginContents;
