import React from "react";
import { InnerBox, Text, Span, Box } from "./styled";
// import StarIcon from "@material-ui/icons/Star";
import EcoIcon from "@material-ui/icons/Eco";

const DetailsBottomSection = () => {
  return (
    <InnerBox main>
      <InnerBox>
        <Text>Job Function:</Text>
        <Text>Creative & Design</Text>
      </InnerBox>
      <Box flex>
        <EcoIcon /> <Span>16h</Span>
      </Box>
    </InnerBox>
  );
};

export default DetailsBottomSection;
