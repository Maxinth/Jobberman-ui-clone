import { MainContainer, FeaturedContainer, Heading } from "./styled";
import AssessmentsSections from "./AssessmentsSections";
import React from "react";

const FeaturedProducts = () => {
  return (
    <FeaturedContainer>
      <Heading>Featured Product</Heading>
      <MainContainer>
        <AssessmentsSections />
      </MainContainer>
    </FeaturedContainer>
  );
};

export default FeaturedProducts;
