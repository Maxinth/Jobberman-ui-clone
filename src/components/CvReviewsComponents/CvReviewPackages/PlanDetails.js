import React from "react";
import { PlanDetailsContainer, Details } from "./styled";
import GenerateDetailsItem from "./GenerateDetailsItem";
import PropTypes from "prop-types";
import CTA from "../../CTA";

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
