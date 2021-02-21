import React from "react";
import { Text } from "./styled";
import styled from "styled-components";

const ItalicText = styled(Text)`
  font-style: italic;
`;

const Box = styled.div`
  > ${Text} {
    margin-bottom: unset;
  }
`;
const WhatSection = () => {
  return (
    <Box>
      <Text>What to look for? </Text>
      <ItalicText>Fraudulent activities can occur in the form of:</ItalicText>
    </Box>
  );
};

export default WhatSection;
