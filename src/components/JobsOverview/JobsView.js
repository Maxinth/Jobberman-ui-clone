import React from "react";
import { Container, Heading } from "../FindHelp/findHelp.elements";
import styled from "styled-components";
import JobSection from "./JobSection";
import { data } from "./data";

const JobsContainer = styled.section`
  @media (min-width: 1250px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    > * {
      margin-right: 1rem;
    }
  }
`;

const JobsView = () => {
  const { featuredJobs, newlyAddedJobs, popularJobs } = data;
  return (
    <Container>
      <Heading>Top Jobs</Heading>
      <JobsContainer>
        <JobSection {...featuredJobs} />
        <JobSection {...newlyAddedJobs} />
        <JobSection {...popularJobs} />
      </JobsContainer>
    </Container>
  );
};

export default JobsView;
