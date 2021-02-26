import React from "react";
import { Container, Heading } from "./styled";
import GenerateRequests from "./GenerateRequests";

const CvRequest = () => {
  return (
    <Container>
      <Heading>To request a revision of your CV </Heading>
      <GenerateRequests />
    </Container>
  );
};

export default CvRequest;
