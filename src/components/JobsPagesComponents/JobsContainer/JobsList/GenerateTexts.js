import React from "react";
import { Text } from "./styled";
import PropTypes from "prop-types";

const GenerateTexts = ({ data }) => {
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
