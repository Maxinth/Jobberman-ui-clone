import React from "react";
import styled from "styled-components";
import GenerateDetailsItem from "./GenerateDetailsItem";
import PropTypes from "prop-types";

import CTA from "../../CTA";
import { Btn } from "../../StandOut/standOutElements";

const PlanDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${Btn} {
    max-width: 200px;
    min-width: 200px;
    margin: 0 auto 3rem;
  }
`;
const Details = styled.ul`
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
`;

const PlanDetails = ({ data }) => {
  return (
    <PlanDetailsContainer>
      <Details>
        <GenerateDetailsItem data={data} />
      </Details>
      <CTA text="get started" goTo="/" />
    </PlanDetailsContainer>
  );
};

PlanDetails.propTypes = {
  data: PropTypes.array,
};

export default PlanDetails;
