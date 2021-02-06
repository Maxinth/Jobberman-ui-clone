import React from "react";
import { Container, Heading, JobItemsContainer } from "./styled";

import JobList from "./JobList";

const JobFunctions = () => {
  return (
    <Container>
      <Heading>Job Functions</Heading>
      <JobItemsContainer>
        <JobList />
      </JobItemsContainer>
    </Container>
  );
};

export default JobFunctions;
