import React from "react";
import CTA from "../CTA";
import { SpanText, BtnContainer, BtnBox } from "./styled";

const ButtonSection = () => {
  return (
    <BtnContainer>
      <CTA isBlack={true} text="log in" goTo="/" />
      <BtnBox>
        <SpanText lg> Don't have an account? </SpanText>
        <SpanText lg colored>
          Sign up
        </SpanText>
      </BtnBox>
    </BtnContainer>
  );
};

export default ButtonSection;
