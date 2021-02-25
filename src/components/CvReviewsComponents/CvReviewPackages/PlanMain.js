import React from "react";
import PriceSection from "./PriceSection";
import PlanDetailsSection from "./PlanDetailsSection";
import { PlanBox, PlanHeader } from "./styled";

const PlanMain = ({ plan }) => {
  const { title, price, cvIncluded, details, bgColor } = plan;
  return (
    <PlanBox>
      <PlanHeader bgColor={bgColor}>{title}</PlanHeader>
      <PriceSection price={price} cvIncluded={cvIncluded} />
      <PlanDetailsSection details={details} />
    </PlanBox>
  );
};

export default PlanMain;
