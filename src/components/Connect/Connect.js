import React from "react";
import styled, { css } from "styled-components";
import arm from "../../assets/ARM.webp";
import ariosh from "../../assets/ariosh.webp";
import biofem from "../../assets/BIOFEM.webp";
import bpl from "../../assets/bpl.webp";
import db from "../../assets/db.webp";
import enterpriseHub from "../../assets/enterpriseHub.webp";
import { batchOne } from "./data";
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

const CompaniesLogosContainer = styled.section`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CompaniesLogos = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  > * {
    flex: 1;
    margin: 0 1rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 900px) {
    margin-bottom: unset;
  }
`;
const CoyLogo = styled.img`
  display: inline-block;
  width: 100%;
  width: 100px;
  height: 100px;
  object-fit: contain;
  transition: all 0.2s;
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
          <CompaniesLogos>
            <CompanyBox items={batchOne} />
          </CompaniesLogos>
          {/* move to seperate component */}
        </CompaniesLogosContainer>
      </ConnectBox>
    </ConnectContainer>
  );
};

export default Connect;
