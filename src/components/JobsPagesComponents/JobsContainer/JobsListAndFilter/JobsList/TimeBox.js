import React from "react";
import { Span, Box } from "./styled";
import PropTypes from "prop-types";
import EcoIcon from "@material-ui/icons/Eco";

const TimeBox = ({ time }) => {
  return (
    <Box flex>
      <EcoIcon /> <Span>{time}</Span>
    </Box>
  );
};

TimeBox.propTypes = {
  time: PropTypes.string,
};

export default TimeBox;
