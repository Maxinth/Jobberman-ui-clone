import React from "react";
import PlanDetails from "./PlanDetails";
import { Section } from "./styled";
import PropTypes from "prop-types";

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
