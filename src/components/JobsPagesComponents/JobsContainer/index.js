import React from "react";
import JobsFilter from "./JobFilter";
import JobsDetails from "./JobsDetails";
import { JobsMainContainer } from "./styled";

const JobsContainer = () => {
  return (
    <JobsMainContainer>
      <JobsDetails />
      <JobsFilter />
    </JobsMainContainer>
  );
};

export default JobsContainer;
