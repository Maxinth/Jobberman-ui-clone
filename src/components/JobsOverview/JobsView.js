import React from "react";
import { Container, Heading } from "../FindHelp/findHelp.elements";
import JobSection from "./JobSection";
import { data } from "./data";
import { JobsContainer } from "./jobsElements";

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
