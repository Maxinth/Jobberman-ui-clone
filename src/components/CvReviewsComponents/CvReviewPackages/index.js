import React from "react";
import styled from "styled-components";
import { Container as PlanBox } from "../../JobsOverview/jobsElements";

const PlansContainer = styled.section`
  padding-top: 1rem;
  background-color: #fff;
  ${PlanBox} {
    margin: 3rem auto;
    max-width: 600px;
    display: block;
    padding: unset;
  }
`;

const PlanHeader = styled.h3`
  background-color: ${({ bgColor }) => bgColor};
  padding: 1rem;
  width: 100%;
  color: #fff;
  text-align: center;
  font-family: "Raleway", sans-serif;
  letter-spacing: 2.5px;
  font-size: 1.5rem;
`;

const PriceBox = styled.div`
  padding: 2rem;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  color: rgb(78, 85, 89);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Currency = styled.sup`
  font-size: 1rem;
  font-weight: 500;
  transform: translateY(-6px);
  margin-right: 0.2rem;
`;
const Price = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
`;

const CvReviewPlans = () => {
  return (
    <PlansContainer>
      <PlanBox>
        <PlanHeader bgColor="grey">Bronze</PlanHeader>
        {/* price section */}
        <PriceBox>
          <Currency>NGN</Currency>
          <Price>12,900</Price>
        </PriceBox>
      </PlanBox>
    </PlansContainer>
  );
};

export default CvReviewPlans;
