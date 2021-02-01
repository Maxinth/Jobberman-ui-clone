import React from "react";
import { HelpBox, Text } from "./findHelp.elements";
import FindOut from "./FindOut";
const HelpSection = () => {
  return (
    <HelpBox>
      <FindOut />
      <Text orText={true}>Or</Text>
    </HelpBox>
  );
};

export default HelpSection;
