import React from "react";
import PriceSection from "./PriceSection";
import PlanDetailsSection from "./PlanDetailsSection";
import styled from "styled-components";
import { Container as PlanBox } from "../../JobsOverview/jobsElements";

const PlanHeader = styled.h3`
  background-color: ${({ bgColor }) => bgColor};
  padding: 1rem;
  width: 100%;
  color: #fff;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 2.5px;
  font-size: 1.5rem;
`;

const PlanMain = ({ plan }) => {
  const { title, price, cvIncluded, details } = plan;
  return (
    <PlanBox>
      <PlanHeader bgColor="grey">{title}</PlanHeader>
      <PriceSection price={price} cvIncluded={cvIncluded} />
      <PlanDetailsSection details={details} />
    </PlanBox>
  );
};

export default PlanMain;
