import React from "react";
import styled from "styled-components";
import GenerateRequests from "./GenerateRequests";
const Container = styled.section`
  padding: 1rem 2rem;
  color: rgb(78, 85, 89);
`;

const Heading = styled.h4``;
const CvRequest = () => {
  return (
    <Container>
      <Heading>To request a revision of your CV </Heading>
      <GenerateRequests />
    </Container>
  );
};

export default CvRequest;
