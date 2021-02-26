import React from "react";
import { Container } from "./Banner/styled";
import BannerMain from "./Banner/BannerMain";
import CvReviewPlans from "./CvReviewPackages";
import HowItWorks from "./HowItWorks";

const CvReviewsPage = () => {
  return (
    <Container>
      <BannerMain />
      <CvReviewPlans />
      <HowItWorks />
    </Container>
  );
};

export default CvReviewsPage;
