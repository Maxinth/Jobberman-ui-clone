import React from "react";
import styled from "styled-components";
import { Container as PlanBox } from "../../JobsOverview/jobsElements";
import PriceSection from "./PriceSection";
import PlanDetailsSection from "./PlanDetailsSection";
const PlansContainer = styled.section`
  padding-top: 1rem;
  background-color: #fff;
  ${PlanBox} {
    margin: 3rem auto;
    max-width: 600px;
    display: block;
    padding: unset;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 2px 0px,
      rgba(0, 0, 0, 0.1) 0px 3px 1px -2px, rgba(0, 0, 0, 0.06) 0px 1px 5px 0px;
  }
`;

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

const CvReviewPlans = () => {
  return (
    <PlansContainer>
      <PlanBox>
        <PlanHeader bgColor="grey">Bronze</PlanHeader>
        {/* price section */}
        <PriceSection />
        <PlanDetailsSection />
      </PlanBox>
    </PlansContainer>
  );
};

export default CvReviewPlans;
