import React from "react";
import styled from "styled-components";

import { Container, Heading } from "../FindHelp/findHelp.elements";
import ContactNav from "./ContactNav";

const ContactContainer = styled(Container)`
  padding: unset;
  padding-top: 4.5rem;
  ${Heading} {
    color: rgb(78, 85, 89);
  }
`;

const ContactPage = () => {
  return (
    <ContactContainer>
      <ContactNav />
      <Heading>Contact Us</Heading>
    </ContactContainer>
  );
};

export default ContactPage;
