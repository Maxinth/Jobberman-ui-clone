import React from "react";
import { Heading } from "../Connect/styled";
import styled from "styled-components";
import { firstBatch, secondBatch, thirdBatch, fourthBatch } from "./data";

import JobBatch from "./JobBatch";
const Container = styled.section`
  ${Heading} {
    margin-bottom: 1rem;
  }
`;
const JobItemsList = styled.ul`
  color: rgb(78, 85, 89);

  font-family: Roboto, sans-serif;
  @media (min-width: 500px) {
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 900px) {
    /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
  }
`;

const JobFunctions = () => {
  return (
    <Container>
      <Heading>Job Functions</Heading>
      <JobItemsList>
        <JobBatch batch={firstBatch} />
        <JobBatch batch={secondBatch} />
        <JobBatch batch={thirdBatch} />
        <JobBatch batch={fourthBatch} />
      </JobItemsList>
    </Container>
  );
};

export default JobFunctions;
