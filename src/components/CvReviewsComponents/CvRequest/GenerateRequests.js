import React from "react";
import { Box, Text } from "./styled";
import { data } from "./data";

const GenerateRequests = () => {
  return (
    <Box>
      {data.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </Box>
  );
};

export default GenerateRequests;
