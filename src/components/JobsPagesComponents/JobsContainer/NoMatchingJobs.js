import React from "react";
import styled, { css } from "styled-components";
import { FilterContainer } from "./JobFilter/styled";
import CTA from "../../CTA";
import { useGlobalContext } from "../../context";

const NoMatchContainer = styled(FilterContainer)`
  font-family: "Roboto", sans-serif;
  padding: 4rem 2rem;
  width: 100%;
  margin-left: unset;
`;
const NoMatchText = styled.p`
  text-align: center;
  font-size: 1.3rem;
  font-style: italic;
`;
const Span = styled.span`
  ${({ red }) =>
    red &&
    css`
      color: red;
    `}
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
      margin-right: 0.4rem;
    `}
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  > button {
    margin-top: 1.5rem;
  }
`;

const NoMatchingJobs = () => {
  const { resetToInitialData } = useGlobalContext();
  return (
    <NoMatchContainer>
      <NoMatchText>
        <Span bold>No Jobs</Span>
        <Span red>on this page</Span> match those parameters!
      </NoMatchText>

      <BtnBox onClick={resetToInitialData}>
        <CTA text="see page's Jobs" goTo="/jobs" />
      </BtnBox>
    </NoMatchContainer>
  );
};

export default NoMatchingJobs;
