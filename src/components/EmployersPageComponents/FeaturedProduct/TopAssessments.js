import { ConnectBox as ProductBox } from "../../Connect/styled";
import OfferSection from "./OfferSection";
import Assessments from "./Assessments";
import React from "react";

const TopAssessments = () => {
  return (
    <>
      <ProductBox>
        <OfferSection />
        <Assessments />
      </ProductBox>
    </>
  );
};

export default TopAssessments;
