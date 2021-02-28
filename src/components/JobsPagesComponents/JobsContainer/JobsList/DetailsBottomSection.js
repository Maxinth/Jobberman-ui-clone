import React from "react";
import { InnerBox, Text, Span, Box } from "./styled";
// import StarIcon from "@material-ui/icons/Star";
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

export default DetailsBottomSection;
