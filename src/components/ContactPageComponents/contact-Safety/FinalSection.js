import React from "react";
import { Section, BoldText, Text } from "./styled";
import GenerateTips from "./GenerateTips";
import { tips, boldText, normalText } from "./data";

const FinalSection = () => {
  return (
    <Section>
      <BoldText>{boldText}</BoldText>
      <Text>{normalText}</Text>
      <GenerateTips data={tips} />
    </Section>
  );
};

export default FinalSection;
