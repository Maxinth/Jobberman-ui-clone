import React from "react";
import CvReviewsPage from "../components/CvReviewsComponents";
import TransitionBox from "./TransitionBox";
import useTitle from "../components/useTitle";

const CvReviews = () => {
  useTitle("Professional CV Services Nigeria");
  return (
    <TransitionBox>
      <CvReviewsPage />
    </TransitionBox>
  );
};

export default CvReviews;
