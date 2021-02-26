import React from "react";
import { Container } from "./Banner/styled";
import BannerMain from "./Banner/BannerMain";
import CvReviewPlans from "./CvReviewPackages";
import HowItWorks from "./HowItWorks";
import CvRequest from "./CvRequest";

const CvReviewsPage = () => {
  return (
    <Container>
      <BannerMain />
      <CvReviewPlans />
      <HowItWorks />
      <CvRequest />
    </Container>
  );
};

export default CvReviewsPage;
