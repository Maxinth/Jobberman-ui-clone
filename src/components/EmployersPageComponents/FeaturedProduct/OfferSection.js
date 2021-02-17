import GenerateTexts from "./GenerateTexts";
import { Heading, Box } from "./styled";
import { productTexts } from "./categoryData";
import React from "react";

const OfferSection = () => {
  return (
    <Box>
      <Heading as="h4">
        We now offer skills assessments when creating a job listing
      </Heading>
      <GenerateTexts data={productTexts} />
    </Box>
  );
};

export default OfferSection;
