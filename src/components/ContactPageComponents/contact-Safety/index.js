import React from "react";
import { Text, Container } from "../contact-About/styled";
import styled from "styled-components";
import WhatSection from "./WhatSection";

const SafetyContainer = styled(Container)``;
const TipContainer = styled.ul`
  padding: 1rem 2rem;
`;
const BoldText = styled(Text)`
  font-weight: 500;
`;
const TipItem = styled.li`
  list-style-type: initial;
`;

const ContactSafetyContents = () => {
  return (
    <SafetyContainer>
      <Text>
        The proliferation of scams on the internet commonly leads us to view
        scam job adverts and fraudulent activities as genuine. There are scam
        artist out there making millions off of fake job postings, and
        pay-to-play schemes designed to cheat unsuspecting people. It is
        important that you protect yourself against job scams and other
        fraudulent activities during the course of your job search.
      </Text>
      <WhatSection />
      <TipContainer>
        <TipItem>
          <BoldText>
            Scam artists wanting to throw you off your game will prey on your
            anxiety by provoking you, a job seeker with a false sense of urgency
            by saying things like, you have to act now or time is running out.
          </BoldText>
        </TipItem>
      </TipContainer>
    </SafetyContainer>
  );
};

export default ContactSafetyContents;
