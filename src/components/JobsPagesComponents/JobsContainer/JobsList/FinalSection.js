import React from "react";
import { Box, Span, Text } from "./styled";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

const FinalSection = () => {
  return (
    <Box flexTwo pad>
      <Span pad>
        <BusinessCenterIcon />
      </Span>
      <Text>
        Are you a brilliant accountant with pristine accuracy at your Job with?
        Our Client is in search of bright and outstanding accountants who can go
        on a beautiful adventure of numbers and grow in career and as an
        individual as they value balance.
      </Text>
    </Box>
  );
};

export default FinalSection;
