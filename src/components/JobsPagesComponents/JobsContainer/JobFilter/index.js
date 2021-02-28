import React from "react";
import HeaderMain from "../Header";
import styled from "styled-components";

const Container = styled.section`
  margin-top: 1rem;
  /* grid-column: 9/-1; */
  /* display: none;
  @media (min-width: 1140px) {
    display: block;
  } */
`;
const JobsFilter = () => {
  return (
    <Container>
      <HeaderMain text="Filter Results" el="h2" />
    </Container>
  );
};

export default JobsFilter;
