import React from "react";
import styled from "styled-components";
import { Input, SpanText } from "./styled";
const CheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;

  @media (min-width: 500px) {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  transition: margin-bottom 0.2;
  > ${Input} {
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    width: unset;
  }

  @media (min-width: 500px) {
    margin-bottom: unset;
  }
`;

const LoginCheck = () => {
  return (
    <CheckContainer>
      <Box>
        <Input type="checkbox" />
        <SpanText>Keep me logged in </SpanText>
      </Box>
      <SpanText colored>Forgot Password?</SpanText>
    </CheckContainer>
  );
};

export default LoginCheck;
