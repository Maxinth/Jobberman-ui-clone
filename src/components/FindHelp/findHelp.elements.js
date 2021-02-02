import styled from "styled-components";
import { global } from "../../globalStyles";
const Container = styled.section`
  background: rgb(242, 242, 242);
  padding: 3rem 1rem;
`;

const Heading = styled.h2`
  font-size: 1.3rem;
  color: #333;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  transition: font-size 0.3s;
  margin: 2rem 0;

  @media (min-width: 642px) {
    font-size: calc(1rem + 2vw);
  }
  @media (min-width: 900px) {
    font-size: 2rem;
  }
`;

const Text = styled.span`
  color: ${({ colored }) => (colored ? global.mainOrange : "#333")};
  font-size: ${({ orText }) => (orText ? " 1.5rem" : "unset")};
  font-weight: ${({ orText }) => (orText ? " 700" : "unset")};
  margin: ${({ orText }) => (orText ? " 1rem 0" : "unset")};
  font-family: ${({ orText }) => (orText ? `"Raleway", sans-serif` : "unset")};
  margin-left: ${({ shift }) => (shift ? "0.5rem" : "unset")};
`;

const HelpBox = styled.section`
  background: #fff;
  box-shadow: 1px 1px 6px grey;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  margin: 0 1rem;

  @media (min-width: 768px) {
    flex-direction: row;

    > * {
      margin-left: 2rem;
    }

    section:first-child {
      margin-left: unset;
    }
  }
`;

const TextContainer = styled.p`
  margin-bottom: 1rem;

  a {
    margin-right: 0.5rem;
  }

  /* ${Text} {
    margin-left: ${({ shift }) => (shift ? "0.7rem" : "unset")};
  } */
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
    color: rgb(78, 85, 89);
  }
`;
export { Container, Heading, HelpBox, FindOutContainer, Text, TextContainer };
