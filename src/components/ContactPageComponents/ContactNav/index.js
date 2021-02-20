import React from "react";
import styled from "styled-components";

import GenerateContactNavLinks from "./GenerateContactNavLinks";

const ContactNavSection = styled.section`
  background-color: rgb(65, 104, 198);
  /* margin-top: 3rem; */
`;

const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* padding: 2rem 1.5rem 0rem; */
  max-width: 900px;
  margin: 0 auto;
  /* margin-top: -2rem; */
`;

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
