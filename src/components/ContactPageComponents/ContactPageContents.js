import React from "react";
import AddressSection from "./AddressBox";
import ContactForm from "./ContactForm";
import Contacts from "./Contacts";
import TermsAndCondition from "./TaC";
import { HrBreak } from "./styled";

const ContactPageContents = () => {
  return (
    <>
      <AddressSection />
      <Contacts />
      <HrBreak />
      <ContactForm />
      <TermsAndCondition />
    </>
  );
};

export default ContactPageContents;
