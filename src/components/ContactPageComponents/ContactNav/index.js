import React from "react";
import { ContactNavSection, NavContainer } from "./styled";
import GenerateContactNavLinks from "./GenerateContactNavLinks";

const ContactNav = (props) => {
  return (
    <ContactNavSection>
      <NavContainer>
        <GenerateContactNavLinks {...props} />
      </NavContainer>
    </ContactNavSection>
  );
};

export default ContactNav;
