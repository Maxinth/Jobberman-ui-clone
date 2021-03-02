import React from "react";
import PropTypes from "prop-types";
import GenerateTexts from "./GenerateTexts";
import InnerBoxSection from "./InnerBoxSection";

const DetailsTopSection = ({ company, location, jobType, salary }) => {
  const texts = [location, jobType];

  return (
    <>
      <GenerateTexts data={[company]} />
      <InnerBoxSection texts={texts} salary={salary} />
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
