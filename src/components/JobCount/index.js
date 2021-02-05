import React from "react";
import JobFunctions from "../JobFunctions";
import { Container, Heading, JobBox, CTA } from "./styled";

const JobCount = () => {
  return (
    <Container>
      <JobBox>
        <Heading>1549 jobs online now ! </Heading>
        <CTA text="view all jobs" goTo="/jobs" />
      </JobBox>
      <JobFunctions />
    </Container>
  );
};

export default JobCount;
