import React from "react";
import { Text, Span } from "./styled";
import PropTypes from "prop-types";
import GenerateTexts from "./GenerateTexts";

const DetailsTopSection = ({ company, location, jobType, salary }) => {
  const texts = [company, location, jobType];

  return (
    <>
      <GenerateTexts data={texts} />
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
