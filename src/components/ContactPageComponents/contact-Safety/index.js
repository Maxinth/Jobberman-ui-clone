import React from "react";
import { SafetyContainer } from "./styled";
import WhatSection from "./WhatSection";
import { fraudExamples } from "./data";
import GenerateTips from "./GenerateTips";
import FinalSection from "./FinalSection";
import LongText from "./LongText";

const ContactSafetyContents = () => {
  return (
    <SafetyContainer>
      <LongText />
      <WhatSection />
      <GenerateTips data={fraudExamples} />
      <FinalSection />
    </SafetyContainer>
  );
};

export default ContactSafetyContents;
