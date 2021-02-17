import { Text } from "../../StandOut/standOutElements";
import PropTypes from "prop-types";
import React from "react";

const GenerateTexts = ({ data = [] }) => {
  return (
    <>
      {data.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </>
  );
};

GenerateTexts.propTypes = {
  data: PropTypes.array,
};

export default GenerateTexts;
