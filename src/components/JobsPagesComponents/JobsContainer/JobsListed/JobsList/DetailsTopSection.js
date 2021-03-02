import React from "react";
import { Text, Span, InnerBox } from "./styled";
import PropTypes from "prop-types";
import GenerateTexts from "./GenerateTexts";

const DetailsTopSection = ({ company, location, jobType, salary }) => {
  const texts = [ location, jobType];

  return (
    <>
      <GenerateTexts data={[company]} />
      <InnerBox inner={'.3rem'}>
        <GenerateTexts data={texts} />
        <Text>
          <Span bold>NGN</Span> {salary}
        </Text>
      </InnerBox>
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
