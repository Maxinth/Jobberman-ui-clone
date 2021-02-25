import React from "react";
import styled from "styled-components";
import { Container as PlanBox } from "../../JobsOverview/jobsElements";
import GeneratePlans from "./GeneratePlans";

const PlansContainer = styled.section`
  padding: 1rem 2rem;

  background-color: #fff;
  ${PlanBox} {
    margin: 3rem auto;
    max-width: 400px;
    display: block;
    padding: unset;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 2px 0px,
      rgba(0, 0, 0, 0.1) 0px 3px 1px -2px, rgba(0, 0, 0, 0.06) 0px 1px 5px 0px;
  }
`;

const CvReviewPlans = () => {
  return (
    <PlansContainer>
      <GeneratePlans />
    </PlansContainer>
  );
};

export default CvReviewPlans;
