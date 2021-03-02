import styled from "styled-components";
import { LabelBox } from "../Label/styled";

// Contents
const ContentBox = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  line-height: 1.8;
  transform: translate(-80px, -50px);
  color: rgb(78, 85, 89);
  font-size: 0.9rem;
`;

const Heading = styled.h3``;

const Span = styled.span`
  font-size: 0.9rem;
  color: ${({ clr }) => clr};
  > svg {
    color: inherit;
    margin-top: 0.2rem;
  }
`;

const Location = styled.div`
  display: flex;
  flex-direction: column;
  > span {
    text-transform: capitalize;
  }
`;

// Details
const Container = styled.section`
  display: flex;
  padding: 4rem 1rem 0rem;
  justify-content: space-between;

  position: relative;
  ${LabelBox} {
    width: 160px;
    transform: translate(-40px, -16px);
  }
`;

// ItemDetail
const DetailsSection = styled.section`
  display: flex;
  flex-direction: column;
`;

// TimeStamp
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

export {
  ContentBox,
  Heading,
  Span,
  Location,
  Container,
  DetailsSection,
  TimeBox,
};
