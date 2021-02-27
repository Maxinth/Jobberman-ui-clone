import React from "react";
import StarIcon from "@material-ui/icons/Star";
import EcoIcon from "@material-ui/icons/Eco";

import styled from "styled-components";
import { Span } from "./Contents";

const TimeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid rgb(218, 218, 218);
  border-bottom: 1px solid rgb(218, 218, 218);
  width: 100%;
  transform: translateY(1px);
  padding: 0.5rem;
  > * {
    margin-right: 0.2rem;
  }
`;
const TimeStamp = () => {
  return (
    <TimeBox>
      <StarIcon />
      <EcoIcon />
      <Span>4w</Span>
    </TimeBox>
  );
};

export default TimeStamp;
