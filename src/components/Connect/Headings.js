import React from "react";
import { Heading, HeadingsContainer } from "./styled";

const Headings = () => {
  return (
    <HeadingsContainer>
      <Heading>Connecting you with top employers</Heading>
      <Heading as="h6" smaller>
        Your next job could be with one of these leading companies
      </Heading>
    </HeadingsContainer>
  );
};

export default Headings;
