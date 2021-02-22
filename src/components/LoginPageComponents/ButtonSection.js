import React from "react";
import CTA from "../CTA";
import styled from "styled-components";
import { Btn } from "../StandOut/standOutElements";
import { SpanText } from "./styled";

const BtnContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  ${Btn} {
    width: 100%;
  }
`;

const BtnBox = styled.div`
  margin-top: 3rem;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > ${SpanText} {
    margin-bottom: 1rem;
  }
`;

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
