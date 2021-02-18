import React from "react";
import { Heading, Text, Span } from "../FeaturedProduct/styled";
import styled from "styled-components";
import CTA from "../../CTA";
const ContactBox = styled.div`
  padding: 6rem 2rem;
  color: rgb(78, 85, 89);
  color: #333;
  font-family: "Open Sans", sans-serif;
  ${Heading} {
    font-size: 1.1rem;
    font-weight: normal;
    line-height: 1.7;
    margin: unset;
    margin-bottom: 0.5rem;
  }

  ${Heading}+ ${Heading} {
    font-weight: bold;
  }
  ${Span} {
    font-size: 1rem !important;
    color: inherit;
    font-style: unset;
    font-weight: 400;
    word-break: break-all;
    margin-bottom: 2rem;
    @media (min-width: 1024px) {
      font-size: 0.95rem !important;
      line-height: 1.8;
    }
  }
`;

const ContactHrTeam = () => {
  return (
    <ContactBox>
      <Heading> Our Personalised HR Solutions offer </Heading>
      <Heading>'Fit For Purpose'</Heading>
      <Span>
        Products That Align With Your <br />
        Business Objectives
      </Span>
      <CTA text="contact our solutions team" goTo="/call-request" />
    </ContactBox>
  );
};

export default ContactHrTeam;
