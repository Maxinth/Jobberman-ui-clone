import React from "react";
import styled, { css } from "styled-components";

const Heading = styled.h5`
  text-align: center;
  font-size: ${({ smaller }) => (smaller ? "1rem" : "1.2rem")};
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  transition: font-size 0.2s;
  ${(props) =>
    props.smaller &&
    css`
      margin-top: 1rem;
      font-weight: 500;
    `}

  @media (min-width: 500px) {
    font-size: ${({ smaller }) => (smaller ? "1.2rem" : "2rem")};
  }
`;

const HeadingsContainer = styled.div``;
const Headings = () => {
  return (
    <HeadingsContainer>
      <Heading>Connecting you with top employers</Heading>
      <Heading as="h6" smaller>
        Your next job could be with one of these leading companies
      </Heading>
    </HeadingsContainer>
  );
};

export default Headings;
