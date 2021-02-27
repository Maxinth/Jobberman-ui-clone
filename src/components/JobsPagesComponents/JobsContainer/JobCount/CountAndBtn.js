import React from "react";
import styled from "styled-components";
import CTA from "../../../CTA";
import { Btn } from "../../../StandOut/standOutElements";

const Box = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  ${Btn} {
    width: unset;
  }
`;
const Count = styled.p`
  font-family: "Open Sans", sans-serif;
  margin-top: 2.5rem;
`;
const Span = styled.span`
  font-weight: 600;
`;

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
