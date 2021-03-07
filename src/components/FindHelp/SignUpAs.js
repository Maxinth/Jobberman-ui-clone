import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import { FindOutContainer as Container } from "./findHelp.elements";
import GenerateSignUpTexts from "./GenerateSignUpTexts";

const SignUpAs = () => {
  return (
    <Container>
      <InfoIcon />
      <GenerateSignUpTexts />
    </Container>
  );
};

export default SignUpAs;
