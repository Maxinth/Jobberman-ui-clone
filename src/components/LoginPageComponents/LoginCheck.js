import React from "react";
import { Input, SpanText, Box, CheckContainer } from "./styled";

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
