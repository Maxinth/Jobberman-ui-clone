import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { navLinks } from "./data";

const ContactNavSection = styled.section`
  background-color: rgb(65, 104, 198);
  margin-top: 3rem;
`;

const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 1.5rem 0rem;
  max-width: 900px;
  margin: 0 auto;
  /* margin-top: -2rem; */
`;

const ContactLink = styled(Link)`
  width: 100%;
  display: block;
  padding: 1rem;

  text-align: center;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 1.2rem;
  font-weight: bolder;
  :first-child {
    /* border-bottom: 6px solid #fff; */
  }
`;
const ListItem = styled.li`
  flex: 1;
  width: 100%;
`;
const ContactPage = () => {
  return (
    <ContactNavSection>
      <NavContainer>
        {navLinks.map((item) => (
          <ListItem key={item}>
            <ContactLink>{item}</ContactLink>
          </ListItem>
        ))}
      </NavContainer>
    </ContactNavSection>
  );
};

export default ContactPage;
