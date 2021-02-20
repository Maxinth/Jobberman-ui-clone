import React from "react";
import styled from "styled-components";

import {
  Container,
  Heading,
  HelpBox as ContactBox,
} from "../FindHelp/findHelp.elements";
import AddressSection from "./AddressBox";
import ContactNav from "./ContactNav";

const ContactContainer = styled(Container)`
  color: rgb(78, 85, 89);
  padding: unset;
  padding-top: 4.5rem;
  /* ${Heading} {
    
  } */
  ${ContactBox} {
    display: block;
    padding: 2rem 4rem;
  }
`;

export const Text = styled.p`
  font-family: "Open Sans", sans-serif;
  color: inherit;
  font-size: 1rem;
  line-height: 1.7;
`;

const ContactPage = () => {
  return (
    <ContactContainer>
      <ContactNav />
      <Heading>Contact Us</Heading>
      <ContactBox>
        <AddressSection />
      </ContactBox>
    </ContactContainer>
  );
};

export default ContactPage;
