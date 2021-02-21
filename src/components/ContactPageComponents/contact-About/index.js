import React from "react";
import { Text, Mail, Container } from "./styled";
import GenerateTexts from "./GenerateTexts";

const ContactAboutContents = () => {
  return (
    <Container>
      <GenerateTexts />
      <Text>
        Jobberman Nigeria forms part of the investment portfolio of{" "}
        <Mail href="https://www.roam.africa">Ringier One Africa Media</Mail>
      </Text>
    </Container>
  );
};

export default ContactAboutContents;
