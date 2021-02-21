import React from "react";
import { Section } from "./styled";
import { firstSection } from "./data";
import GenerateInputs from "./GenerateInputs";

const FirstSection = () => {
  return (
    <Section>
      <GenerateInputs data={firstSection} />
    </Section>
  );
};

export default FirstSection;
