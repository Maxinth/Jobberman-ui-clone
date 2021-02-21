import React from "react";
import { Text } from "../styled";
import { Mail } from "../TaC/styled";
import styled from "styled-components";

const Container = styled.div`
  ${Text} {
    margin-bottom: 2rem;
  }
`;

const ContactAboutContents = () => {
  return (
    <Container>
      <Text>
        We are a startup with global ambitions and are savvy to realize them.
      </Text>
      <Text>
        Jobberman is an online career portal from Nigeria. We place a high
        premium on Job search that is relevant and up-to-the-minute. The market
        opportunity is exciting; Nigeria is a large country, large working
        population, and internationally growing. Our long-term goal is simple:
        to be the go-to company for the industry. We dont only offer job
        information services, we are here to build careers
      </Text>
    </Container>
  );
};

export default ContactAboutContents;
