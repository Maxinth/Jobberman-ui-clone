import React from "react";
import {
  MainContainer,
  FeaturedContainer,
  Heading,
  PriceBox,
} from "../FeaturedProduct/styled";
import { ConnectBox } from "../../Connect/styled";
import EndToEnd from "./EndToEnd";
import styled from "styled-components";
import ContactHrTeam from "./ContactHrTeam";
const HrBox = styled(ConnectBox)`
  max-width: 500px;

  @media (min-width: 1024px) {
    max-width: 900px;
  }
`;

const HrContainer = styled(FeaturedContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${MainContainer} {
    box-shadow: 1px 2px 7px grey;
    justify-content: unset;
    padding: unset;
    max-width: 500px;
  }
  @media (min-width: 1024px) {
    ${MainContainer} {
      max-width: 900px;
    }
  }
`;

const HrSolutions = () => {
  return (
    <HrContainer>
      <Heading>Personalised HR solutions </Heading>
      <MainContainer>
        <HrBox>
          <EndToEnd />
        </HrBox>
        {/* second section */}
        <PriceBox>
          <ContactHrTeam />
        </PriceBox>
      </MainContainer>
    </HrContainer>
  );
};

export default HrSolutions;
