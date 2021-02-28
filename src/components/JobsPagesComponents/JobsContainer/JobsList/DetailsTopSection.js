import React from "react";
import { Text, Span } from "./styled";
import PropTypes from "prop-types";

const DetailsTopSection = ({ company, location, jobType, salary }) => {
  return (
    <>
      <Text>{company}</Text>
      <Text>{location}</Text>
      <Text>{jobType}</Text>
      <Text>
        <Span bold>NGN</Span> {salary}
      </Text>
    </>
  );
};

DetailsTopSection.propTypes = {
  jobType: PropTypes.string,
  salary: PropTypes.string,
  location: PropTypes.string,
  company: PropTypes.string,
};

export default DetailsTopSection;
