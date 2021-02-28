import React from "react";
import { Box, Span, Text } from "./styled";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import PropTypes from "prop-types";

const FinalSection = ({ requirements }) => {
  return (
    <Box flexTwo pad>
      <Span pad>
        <BusinessCenterIcon />
      </Span>
      <Text>{requirements}</Text>
    </Box>
  );
};

FinalSection.propTypes = {
  requirements: PropTypes.string,
};

export default FinalSection;
