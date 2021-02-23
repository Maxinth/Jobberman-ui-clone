import React from "react";
import { Container } from "./Banner/styled";
import BannerMain from "./Banner/BannerMain";
import CvReviewPlans from "./CvReviewPackages";

const CvReviewsPage = () => {
  return (
    <Container>
      <BannerMain />
      <CvReviewPlans />
    </Container>
  );
};

export default CvReviewsPage;
