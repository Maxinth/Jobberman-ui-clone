import React from "react";
import { GetStartedContainer, Heading, Span, Text } from "./styled";
import CTA from "../../CTA";

const GetStarted = () => {
  return (
    <GetStartedContainer>
      <Heading> Get started with Jobberman</Heading>
      <Heading>Got some questions?</Heading>
      <Span>
        Call our Solutions Team on <br /> <Text>+234 (0) 813 985 9999</Text>
      </Span>
      <CTA text="request a call" goTo="/call-request" isBlack={true} />
    </GetStartedContainer>
  );
};

export default GetStarted;
