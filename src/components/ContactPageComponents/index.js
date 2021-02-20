import React from "react";
import styled from "styled-components";
import {
  Container,
  Heading,
  HelpBox as ContactBox,
} from "../FindHelp/findHelp.elements";
import AddressSection from "./AddressBox";
import ContactForm from "./ContactForm";
import ContactNav from "./ContactNav";
import Contacts from "./Contacts";

const ContactContainer = styled(Container)`
  color: rgb(78, 85, 89);
  padding: unset;
  padding-top: 4.5rem;
  background-color: #fff;
  transition: background-color 0.2s;
  @media (min-width: 1024px) {
    background: rgb(242, 242, 242);
  }
  ${ContactBox} {
    display: block;
    max-width: 1000px;
    margin: 0 auto;
    box-shadow: unset;
    padding: 2rem;
    transition: all 0.2s;
    @media (min-width: 1024px) {
      box-shadow: 1px 1px 6px grey;
      padding: 4rem 4rem;
    }
  }
`;

const HrBreak = styled.hr`
  color: ghostwhite;
  height: 0.5px;
`;

const ContactPage = () => {
  return (
    <ContactContainer>
      <ContactNav />
      <Heading>Contact Us</Heading>
      <ContactBox>
        <AddressSection />
        <Contacts />
        <HrBreak />
        <ContactForm />
      </ContactBox>
    </ContactContainer>
  );
};

export default ContactPage;
