import React from "react";
import { SpanText, BlockContainer, HrBreak } from "./styled";

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
