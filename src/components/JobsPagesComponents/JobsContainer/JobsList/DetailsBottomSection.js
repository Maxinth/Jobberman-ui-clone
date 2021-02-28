import React from "react";
import { InnerBox, Text, Span, Box } from "./styled";
import PropTypes from "prop-types";
import EcoIcon from "@material-ui/icons/Eco";

const DetailsBottomSection = ({ jobModule, time }) => {
  return (
    <InnerBox main>
      <InnerBox>
        <Text>Job Function:</Text>
        <Text>{jobModule}</Text>
      </InnerBox>
      <Box flex>
        <EcoIcon /> <Span>{time}</Span>
      </Box>
    </InnerBox>
  );
};

DetailsBottomSection.propTypes = {
  jobModule: PropTypes.string,
  time: PropTypes.string,
};

export default DetailsBottomSection;
