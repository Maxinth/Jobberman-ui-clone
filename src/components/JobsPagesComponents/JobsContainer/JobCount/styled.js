import styled from "styled-components";
import { JobBox } from "../../../JobCount/styled";
import { Btn } from "../../../StandOut/standOutElements";

const Count = styled.p`
  font-family: "Open Sans", sans-serif;
  margin-top: 2.5rem;
  transition: margin-top 0.2s;
`;

const Box = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  ${Btn} {
    width: unset;
    transition: margin 0.2s;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 3rem;
    ${Btn} {
      margin: unset;
    }
    ${Count} {
      margin-top: unset;
    }
  }
`;

const Span = styled.span`
  font-weight: 600;
`;

const Container = styled(JobBox)`
  padding: unset;
  display: block;
  width: 100%;
  margin: unset;
  max-width: unset;
`;

export { Container, Count, Span, Box };
