import React from "react";
import styled from "styled-components";
import HeaderMain from "./Header";
const Container = styled.section`
  margin-top: 1rem;
`;

const JobsContainer = () => {
  return (
    <Container>
      <HeaderMain text="Jobs In Nigeria" el="h1" />
    </Container>
  );
};

export default JobsContainer;
