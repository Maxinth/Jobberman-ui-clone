import React from "react";
import { SignUpContainer, Container } from "../../SignUpPageComponents/styled";
import styled from "styled-components";
import GenerateAdCards from "../../EmployersPageComponents/Advertise/GenerateAdCards";
// import { AdContainer as Container } from "../../EmployersPageComponents/Advertise/styled";
import { data } from "./data";

const HowContainer = styled(SignUpContainer)`
  font-family: "Roboto", sans-serif;
`;
const Heading = styled.h3`
  text-align: center;
  font-size: 2rem;
`;
const HowItWorks = () => {
  return (
    <HowContainer>
      <Heading>How It Works</Heading>
      <Container>
        <GenerateAdCards data={data} />
      </Container>
    </HowContainer>
  );
};

export default HowItWorks;
