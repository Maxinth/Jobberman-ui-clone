import React from "react";
import { InnerBox, Span, Text } from "./styled";
import GenerateTexts from "./GenerateTexts";
import PropTypes from "prop-types";

const InnerBoxSection = ({ texts, salary }) => {
  return (
    <InnerBox inner={".3rem"}>
      <GenerateTexts data={texts} />
      <Text shift>
        <Span bold>NGN</Span> {salary}
      </Text>
    </InnerBox>
  );
};

InnerBoxSection.propTypes = {
  texts: PropTypes.array,
  salary: PropTypes.string,
};
export default InnerBoxSection;
