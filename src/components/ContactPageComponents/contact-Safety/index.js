import React from "react";
import { Text, SafetyContainer } from "./styled";

import WhatSection from "./WhatSection";
import { fraudExamples, tips } from "./data";
import GenerateTips from "./GenerateTips";

const ContactSafetyContents = () => {
  return (
    <SafetyContainer>
      <Text>
        The proliferation of scams on the internet commonly leads us to view
        scam job adverts and fraudulent activities as genuine. There are scam
        artist out there making millions off of fake job postings, and
        pay-to-play schemes designed to cheat unsuspecting people. It is
        important that you protect yourself against job scams and other
        fraudulent activities during the course of your job search.
      </Text>
      <WhatSection />
      <GenerateTips data={fraudExamples} />
    </SafetyContainer>
  );
};

export default ContactSafetyContents;
