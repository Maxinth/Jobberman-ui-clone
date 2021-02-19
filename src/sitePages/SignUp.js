import React from "react";
import SignUpPage from "../components/SignUpPageComponents";
import TransitionBox from "./TransitionBox";

const SignUp = () => {
  return (
    <TransitionBox>
      <SignUpPage />
    </TransitionBox>
  );
};

export default SignUp;
