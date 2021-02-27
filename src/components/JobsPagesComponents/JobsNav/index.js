import React from "react";
import { Container, HomeLink, Span } from "./styled";

const JobsNav = () => {
  return (
    <Container>
      <HomeLink to="/">Home</HomeLink>
      <Span colored>/</Span>
      <Span>Search results </Span>
    </Container>
  );
};

export default JobsNav;
