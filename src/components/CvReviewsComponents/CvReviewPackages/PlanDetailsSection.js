import React from "react";
import PlanDetails from "./PlanDetails";
import styled from "styled-components";
import PropTypes from "prop-types";

const Section = styled.section``;
const PlanDetailsSection = ({ details }) => {
  return (
    <Section>
      <PlanDetails data={details} />
    </Section>
  );
};

PlanDetailsSection.propTypes = {
  details: PropTypes.array,
};
export default PlanDetailsSection;
