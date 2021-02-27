import React from "react";
import HeaderMain from "../Header";
import { Container } from "../JobCount/styled";
import styled from "styled-components";
import Details from "./Details";

const FeaturedContainer = styled(Container)`
  margin-top: 1rem;
`;

const FeaturedJobs = () => {
  return (
    <FeaturedContainer>
      <HeaderMain text="Featured Jobs" el="h2" />
      <Details />
    </FeaturedContainer>
  );
};

export default FeaturedJobs;
