import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import {
  FindOutContainer as Container,
  TextContainer,
  Text,
} from "./findHelp.elements";
import { Link } from "react-router-dom";
const SignUpAs = () => {
  return (
    <Container>
      <InfoIcon />
      <TextContainer>
        <Link to="sign-up">
          <Text colored={true}>Sign up</Text>
        </Link>
        as a Job Seeker, it's quick and easy!
      </TextContainer>
      <TextContainer>
        Use our
        <Link to="/job-seeker">
          <Text colored={true}> tips</Text>
        </Link>
        on best practises and improve your visibility to employers
      </TextContainer>
    </Container>
  );
};

export default SignUpAs;
