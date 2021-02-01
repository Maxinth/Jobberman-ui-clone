import React from "react";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import {
  FindOutContainer as Container,
  Text,
  TextContainer,
} from "./findHelp.elements";
import { Link } from "react-router-dom";
const FindOut = () => {
  return (
    <Container>
      <PhoneInTalkIcon />
      <TextContainer>
        <Link to="/employer">
          <Text colored={true}>
            Find out how we help you get you the best candidates
          </Text>
        </Link>
      </TextContainer>
      <TextContainer>
        Call our Solutions Team on
        <Text colored={true} shift={true}>
          +234 (0) 813 985 9999{" "}
        </Text>
        to get started
      </TextContainer>
    </Container>
  );
};

export default FindOut;
