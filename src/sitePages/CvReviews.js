import React from "react";
import CvReviewsPage from "../components/CvReviewsComponents";
import TransitionBox from "./TransitionBox";

const CvReviews = () => {
  return (
    <TransitionBox>
      <CvReviewsPage />
    </TransitionBox>
  );
};

export default CvReviews;
