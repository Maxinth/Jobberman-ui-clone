import styled, { css } from "styled-components";
import { Btn } from "../../StandOut/standOutElements";
import { FilterContainer } from "./JobFilter/styled";
const Container = styled.section`
  padding: 1rem 0;

  > ${Btn} {
    width: 100%;
  }

  @media (min-width: 1024px) {
    > ${Btn} {
      display: none;
    }
  }

  @media (min-width: 1140px) {
    width: 65%;
  }
`;

const JobsMainContainer = styled.section`
  @media (min-width: 1140px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

// NoMatchingJobs
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

export {
  Container,
  JobsMainContainer,
  NoMatchContainer,
  NoMatchText,
  Span,
  BtnBox,
};
