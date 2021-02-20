import React from "react";
import { ContactNavSection, NavContainer } from "./styled";
import GenerateContactNavLinks from "./GenerateContactNavLinks";

const ContactNav = () => {
  return (
    <ContactNavSection>
      <NavContainer>
        <GenerateContactNavLinks />
      </NavContainer>
    </ContactNavSection>
  );
};

export default ContactNav;
