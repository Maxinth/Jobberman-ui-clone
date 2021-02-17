import { HelpContainer, Container, MainContainer } from "./styled";
import HelpMain from "./HelpMain";
import React from "react";

const HelpSection = () => {
  return (
    <MainContainer>
      <HelpContainer>
        <Container>
          <HelpMain />
        </Container>
      </HelpContainer>
    </MainContainer>
  );
};

export default HelpSection;
