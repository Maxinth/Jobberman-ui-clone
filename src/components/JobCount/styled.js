import { Testimonials } from "../StandOut/standOutElements";
import { ConnectBox as JobBox, Heading } from "../Connect/styled";
import CTA from "../CTA";
import styled from "styled-components";

const Container = styled(Testimonials)`
  ${Heading} {
    font-family: "Open Sans", sans-serif;
    padding: unset;
    margin-top: 2rem;
  }

  ${CTA} {
    margin-top: unset;
  }
`;

export { Container, Heading, JobBox, CTA };
