import React from "react";
import { Container } from "./styled";
import { contactsData } from "./data";
import Contact from "./Contact";

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
