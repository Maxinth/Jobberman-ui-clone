import React from "react";
import { HelpBox, Text } from "./findHelp.elements";
import FindOut from "./FindOut";
import SignUpAs from "./SignUpAs";
const HelpSection = () => {
  return (
    <HelpBox>
      <FindOut />
      <Text orText={true}>Or</Text>
      <SignUpAs />
    </HelpBox>
  );
};

export default HelpSection;
