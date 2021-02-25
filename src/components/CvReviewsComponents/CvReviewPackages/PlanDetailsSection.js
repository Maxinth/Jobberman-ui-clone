import React from "react";
import styled from "styled-components";
import GenerateDetailsItem from "./GenerateDetailsItem";
import { data } from "./data";

const PlanDetailsContainer = styled.section``;
const PlanDetails = styled.ul`
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
`;

const PlanDetailsSection = () => {
  return (
    <PlanDetailsContainer>
      <PlanDetails>
        <GenerateDetailsItem data={data} />
      </PlanDetails>
    </PlanDetailsContainer>
  );
};

export default PlanDetailsSection;
