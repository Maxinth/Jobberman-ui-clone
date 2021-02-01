import React from "react";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import { FindOutContainer, Text, TextContainer } from "./findHelp.elements";
const FindOut = () => {
  return (
    <FindOutContainer>
      <PhoneInTalkIcon />
      <TextContainer>
        <Text colored={true}>
          Find out how we help you get you the best candidates
        </Text>
      </TextContainer>
      <TextContainer>
        Call our Solutions Team on
        <Text colored={true}>+234 (0) 813 985 9999 </Text>
        to get started
      </TextContainer>
    </FindOutContainer>
  );
};

export default FindOut;
