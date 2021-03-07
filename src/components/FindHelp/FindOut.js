import React from "react";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import { FindOutContainer as Container } from "./findHelp.elements";
import FindOutTop from "./FindOutTop";
import FindOutBottomSection from "./FindOutBottomSection";

const FindOut = () => {
  return (
    <Container>
      <PhoneInTalkIcon />
      <FindOutTop />
      <FindOutBottomSection />
    </Container>
  );
};

export default FindOut;
