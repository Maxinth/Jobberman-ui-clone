import React from "react";
import styled from "styled-components";
import { contactsData } from "./data";
import Contact from "./Contact";

const Container = styled.section`
  margin-top: 2rem;
  font-family: "Open Sans", sans-serif;
`;
const Contacts = () => {
  return (
    <Container>
      {contactsData.map((item, index) => (
        <Contact key={index} {...item} />
      ))}
    </Container>
  );
};

export default Contacts;
