import React from "react";
import styled from "styled-components";
import { data } from "./data";

const Box = styled.div`
  margin-top: 2rem;
`;

const Text = styled.p`
  line-height: 1.7;
  font-weight: 400;
  margin-bottom: 1rem;
`;
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
