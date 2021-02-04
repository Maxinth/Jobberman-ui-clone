import React from "react";
import styled, { css } from "styled-components";
import arm from "../../assets/ARM.webp";
import ariosh from "../../assets/ariosh.webp";
import BIOFEM from "../../assets/BIOFEM.webp";
import bpl from "../../assets/bpl.webp";
import db from "../../assets/db.webp";
import enterpriseHub from "../../assets/enterpriseHub.webp";
const ConnectContainer = styled.section`
  background-color: rgb(242, 242, 242);
  font-family: "Open Sans", sans-serif;
  padding: 4rem 2rem;
`;

const ConnectBox = styled.section`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
`;

const Heading = styled.h5`
  text-align: center;
  font-size: ${({ smaller }) => (smaller ? "1.2rem" : "2rem")};
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  ${(props) =>
    props.smaller &&
    css`
      margin-top: 1rem;
      font-weight: 500;
    `}
`;

const CompaniesLogosContainer = styled.section`
  margin-top: 2rem;
`;

const CompaniesLogos = styled.div``;
const CoyLogo = styled.img`
  display: block;
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
          <CompaniesLogos>
            {/* <CoyLogo src={} alt="Coy logo" />
                      <CoyLogo src={} alt="Coy logo" />
                      <CoyLogo src={} alt="Coy logo" />
                      <CoyLogo src={} alt="Coy logo" />
                      <CoyLogo src={} alt="Coy logo" />
                      <CoyLogo src={} alt="Coy logo" /> */}
          </CompaniesLogos>
          {/* move to seperate component */}
        </CompaniesLogosContainer>
      </ConnectBox>
    </ConnectContainer>
  );
};

export default Connect;
