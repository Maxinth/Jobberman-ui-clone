import React from "react";
import styled from "styled-components";
import { SpanText } from "./styled";

const BlockContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 5rem;
  /* ${SpanText} {
    font-size: 1.2rem;
  } */
`;
const HrBreak = styled.hr`
  height: 1px;
  color: rgb(226, 232, 240);
  margin: 0 0.5rem;
  flex: 1;
`;

const ContinueBlock = () => {
  return (
    <BlockContainer>
      <HrBreak />
      <SpanText> Or continue with</SpanText>
      <HrBreak />
    </BlockContainer>
  );
};

export default ContinueBlock;
