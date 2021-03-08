import React from "react";
import { Count, Span, Box } from "./styled";
import CTA from "../../../CTA";
import useJobFilter from "../../useJobFilter";
const CountAndBtn = () => {
  const { count } = useJobFilter();

  return (
    <Box>
      <Count>
        <Span>{count}</Span> Jobs Found!
      </Count>
      <CTA text="create job alert" goTo="/" />
    </Box>
  );
};

export default CountAndBtn;
