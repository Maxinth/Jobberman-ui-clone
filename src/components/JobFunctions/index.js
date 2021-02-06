import React from "react";
import { Container, Heading, JobItemsContainer } from "./styled";
import JobList from "./JobList";
import NewsLetter from "./NewsLetter/NewsLetter";

const JobFunctions = () => {
  return (
    <>
      <Container>
        <Heading>Job Functions</Heading>
        <JobItemsContainer>
          <JobList />
        </JobItemsContainer>
      </Container>
      <NewsLetter />
    </>
  );
};

export default JobFunctions;
