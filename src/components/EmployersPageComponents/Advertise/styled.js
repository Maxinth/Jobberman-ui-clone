import styled from "styled-components";
import {
  Container,
  Heading,
  HowTosContainer,
} from "../../StandOut/standOutElements";
import React from "react";

const AdContainer = styled(Container)`
  ${Heading} {
    margin: 2rem 0;
  }
  ${HowTosContainer} {
    padding: 1rem 2rem;
    a {
      transition: margin-top 0.2s;
    }
    h5 {
      font-family: "Open Sans", sans-serif;
      font-size: 1.2rem;
      color: #333;
      font-weight: 600;
    }
    p {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      line-height: 1.9;
      transition: margin-top 0.2s;
    }
    a > p + p {
      margin-top: 1rem;
    }
    @media (min-width: 960px) {
      a:nth-child(2) {
        margin-top: -0.5rem;
      }
      a:nth-child(3) {
        margin-top: 1rem;
      }
    }

    @media (min-width: 1200px) {
      a:nth-child(2) {
        margin-top: 1rem;
      }
      a:nth-child(3) {
        margin-top: 2.5rem;
      }
    }
  }
`;

export { AdContainer, HowTosContainer, Heading };
