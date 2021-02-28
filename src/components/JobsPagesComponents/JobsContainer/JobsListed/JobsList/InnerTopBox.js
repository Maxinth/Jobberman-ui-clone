import React from "react";
import { InnerBox, Text, Span, Box } from "./styled";
import PropTypes from "prop-types";

const InnerTopBox = ({ jobModule }) => {
  return (
    <InnerBox>
      <Text>Job Function:</Text>
      <Text>{jobModule}</Text>
    </InnerBox>
  );
};

InnerTopBox.propTypes = {
  jobModule: PropTypes.string,
};
export default InnerTopBox;
