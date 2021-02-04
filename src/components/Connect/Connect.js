import React from "react";
import styled, { css } from "styled-components";

import { batchOne, batchZero, batchTwo } from "./data";
import CompanyBox from "./CompanyBox";
const ConnectContainer = styled.section`
  background-color: rgb(242, 242, 242);
  font-family: "Open Sans", sans-serif;
  padding: 4rem 2rem;
`;

const ConnectBox = styled.section`
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
`;

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

const Container = styled.section`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 600px;
`;
const CompaniesLogosContainer = styled.section`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

// styled.``;
const Connect = () => {
  return (
    <ConnectContainer>
      <ConnectBox>
        <Heading>Connecting you with top employers</Heading>
        <Heading as="h6" smaller>
          Your next job could be with one of these leading companies
        </Heading>
        <CompaniesLogosContainer>
          {/* move to seperate component */}
          <Container>
            <CompanyBox items={batchZero} />
            <CompanyBox items={batchOne} />
            <CompanyBox items={batchTwo} />
          </Container>
          {/* move to seperate component */}
        </CompaniesLogosContainer>
      </ConnectBox>
    </ConnectContainer>
  );
};

export default Connect;
