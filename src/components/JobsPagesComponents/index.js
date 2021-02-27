import React from "react";
import FindAJob from "./FindAJob";
import { JobsContainer } from "./FindAJob/styled";

const JobsPage = () => {
  return (
    <JobsContainer>
      <FindAJob />
    </JobsContainer>
  );
};

export default JobsPage;
