import { Text, Container } from "../contact-About/styled";
import styled from "styled-components";

// index
const SafetyContainer = styled(Container)``;

// GenerateTips
const TipContainer = styled.ul`
  padding: 1rem 2rem;
`;

// Tip
const BoldText = styled(Text)`
  font-weight: 500;
`;

const TipItem = styled.li`
  list-style-type: initial;
  > ${BoldText} {
    margin-bottom: 0.5rem;
  }
`;

//WhatSection
const ItalicText = styled(Text)`
  font-style: italic;
`;

const Box = styled.div`
  > ${Text} {
    margin-bottom: unset;
  }
`;

// FinalSection
const Section = styled.section`
  ${BoldText} {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  ${BoldText} + ${Text} {
    margin-bottom: unset;
  }
`;

export {
  Text,
  SafetyContainer,
  TipContainer,
  BoldText,
  TipItem,
  Box,
  ItalicText,
  Section,
};
