import React from "react";
import { Container, Heading, JobBox, CTA } from "./styled";

const JobCount = () => {
  return (
    <Container>
      <JobBox>
        <Heading>1549 jobs online now ! </Heading>
        <CTA text="view all jobs" goTo="/jobs" />
      </JobBox>
    </Container>
  );
};

export default JobCount;
