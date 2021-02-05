import { Testimonials } from "../StandOut/standOutElements";
import { ConnectBox as JobBox, Heading } from "../Connect/styled";
import styled from "styled-components";

const Container = styled(Testimonials)`
  margin: unset;
  padding: 3rem 2rem;

  ${Heading} {
    font-family: "Open Sans", sans-serif;
    padding: unset;
    margin-top: 2rem;
  }
`;

export { Container, Heading, JobBox };
