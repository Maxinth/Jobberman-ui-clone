import React from "react";
import ContactBox from "./ContactBox";
import { Section } from "./styled";
import { firstSection } from "./data";

const FirstSection = () => {
  return (
    <Section>
      {firstSection.map((item) => (
        <ContactBox key={item.label} {...item} />
      ))}
    </Section>
  );
};

export default FirstSection;
