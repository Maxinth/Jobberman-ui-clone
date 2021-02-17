import GenerateTexts from "./GenerateTexts";
import { pricingTexts } from "./categoryData";
import CTA from "../../CTA";
import { Span } from "./styled";
import React from "react";

const PriceDetails = () => {
  return (
    <>
      <GenerateTexts data={pricingTexts} />
      <Span>(Save 10%)</Span>
      <CTA text="find out more" goTo="/skills-assessment" />
    </>
  );
};

export default PriceDetails;
