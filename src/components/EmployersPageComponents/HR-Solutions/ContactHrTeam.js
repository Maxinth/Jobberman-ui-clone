import React from "react";
import { ContactBox } from "./styled";
import CTA from "../../CTA";
import ContactTopSection from "./ContactTopSection";

const ContactHrTeam = () => {
  return (
    <ContactBox>
      <ContactTopSection />
      <CTA text="contact our solutions team" goTo="/call-request" />
    </ContactBox>
  );
};

export default ContactHrTeam;
