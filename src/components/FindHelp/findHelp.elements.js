import styled from "styled-components";
import { global } from "../../globalStyles";
const Container = styled.section`
  background: ghostwhite;
  padding: 1rem;
`;

const Heading = styled.h2`
  font-size: 1.3rem;
  color: #333;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  transition: font-size 0.3s;
  margin: 1rem 0;

  @media (min-width: 642px) {
    font-size: calc(1rem + 2vw);
  }
  @media (min-width: 900px) {
    font-size: 2rem;
  }
`;

const HelpBox = styled.section`
  background: #fff;
  box-shadow: 1px 2px 4px #333;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.span`
  color: ${({ colored }) => (colored ? global.mainOrange : "#333")};
  font-size: ${({ orText }) => (orText ? " 1.5rem" : "unset")};
  font-weight: ${({ orText }) => (orText ? " 700" : "unset")};
  margin: ${({ orText }) => (orText ? " 1rem 0" : "unset")};
  font-family: ${({ orText }) => (orText ? `"Raleway", sans-serif` : "unset")};
`;

const TextContainer = styled.p`
  margin-bottom: 1rem;
`;

const FindOutContainer = styled.section`
  text-align: center;
  padding: 2rem;
  font-family: "Open Sans", sans-serif;
  font-size: 1.2rem;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    font-size: 6rem !important;
    color: #333;
  }
`;
export { Container, Heading, HelpBox, FindOutContainer, Text, TextContainer };
