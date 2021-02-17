import JobFunctions from "../JobFunctions";
import { Container, Heading, JobBox } from "./styled";
import CTA from "../CTA";
import React from "react";

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
