import React from "react";
import { HrContainer, Heading, MainContainer } from "./styled";
import EndToEndMain from "./EndToEndMain";
import ContactMain from "./ContactMain";

const HrSolutions = () => {
  return (
    <HrContainer>
      <Heading>Personalised HR solutions </Heading>
      <MainContainer>
        <EndToEndMain />
        <ContactMain />
      </MainContainer>
    </HrContainer>
  );
};

export default HrSolutions;
