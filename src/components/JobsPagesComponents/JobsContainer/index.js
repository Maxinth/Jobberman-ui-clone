import React from "react";
import JobsFilter from "./JobFilter";
import JobsDetails from "./JobsDetails";
import { JobsMainContainer } from "./styled";
import { data } from "./data";
const JobsContainer = () => {
  return (
    <JobsMainContainer>
      <JobsDetails data={data} />
      <JobsFilter />
    </JobsMainContainer>
  );
};

export default JobsContainer;
