import React from "react";
import styled from "styled-components";

import {
  Container,
  Heading,
  HelpBox as ContactBox,
} from "../FindHelp/findHelp.elements";
import AddressSection from "./AddressBox";
import ContactNav from "./ContactNav";
import Contacts from "./Contacts";

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

const ContactPage = () => {
  return (
    <ContactContainer>
      <ContactNav />
      <Heading>Contact Us</Heading>
      <ContactBox>
        <AddressSection />
        <Contacts />
      </ContactBox>
    </ContactContainer>
  );
};

export default ContactPage;
