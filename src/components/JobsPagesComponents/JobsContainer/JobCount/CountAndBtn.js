import React from "react";
import { Count, Span, Box } from "./styled";
import CTA from "../../../CTA";

const CountAndBtn = () => {
  return (
    <Box>
      <Count>
        <Span>1970</Span> Jobs Found
      </Count>
      <CTA text="create job alert" goTo="/" />
    </Box>
  );
};

export default CountAndBtn;
