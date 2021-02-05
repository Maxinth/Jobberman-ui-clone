import React from "react";
import { Heading } from "../Connect/styled";
import styled from "styled-components";
import { Link } from "react-router-dom";
import JobSegment from "./JobSegment";
const Container = styled.section`
  ${Heading} {
    margin-bottom: 1rem;
  }
`;
const JobItemsList = styled.ul`
  color: rgb(78, 85, 89);
  /* display: block; */
  font-family: Roboto, sans-serif;
`;
const JobItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const JobFunctions = () => {
  return (
    <Container>
      <Heading>Job Functions</Heading>
      <JobItemsList>
        <JobItem>
          <JobSegment />
          <JobSegment />
        </JobItem>
      </JobItemsList>
    </Container>
  );
};

export default JobFunctions;
