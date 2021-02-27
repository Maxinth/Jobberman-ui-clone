import React from "react";
import HeaderMain from "../Header";
import { Container } from "../JobCount/styled";
import styled from "styled-components";
import FeaturedLabel from "./Label/FeaturedLabel";
const FeaturedContainer = styled(Container)`
  margin-top: 1rem;
`;

const FeaturedJobs = () => {
  return (
    <FeaturedContainer>
      <HeaderMain text="Featured Jobs" el="h2" />
      <FeaturedLabel />
    </FeaturedContainer>
  );
};

export default FeaturedJobs;
