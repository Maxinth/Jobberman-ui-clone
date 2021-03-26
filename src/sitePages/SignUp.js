import React from "react";
import SignUpPage from "../components/SignUpPageComponents";
import TransitionBox from "./TransitionBox";
import useTitle from "../components/useTitle";

const SignUp = () => {
  useTitle("Sign-up");
  return (
    <TransitionBox>
      <SignUpPage />
    </TransitionBox>
  );
};

export default SignUp;
