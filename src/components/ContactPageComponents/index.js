import React from "react";
import { ContactContainer, ContactPageBox, Heading } from "./styled";
import ContactNav from "./ContactNav";
// import ContactPageContents from "./ContactPageContents";
import ContactAboutContents from "./contact-About";

const ContactPage = () => {
  return (
    <ContactContainer>
      <ContactNav />
      <Heading>Contact Us</Heading>
      <ContactPageBox>
        {/* <ContactPageContents /> */}
        <ContactAboutContents />
      </ContactPageBox>
    </ContactContainer>
  );
};

export default ContactPage;
