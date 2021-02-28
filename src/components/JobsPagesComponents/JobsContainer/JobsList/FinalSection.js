import React from "react";
import { Box, Span, Text } from "./styled";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

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

export default FinalSection;
