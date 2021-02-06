import React from "react";
import JobBatches from "./JobBatches";
import { JobItemsList } from "./styled";

const JobList = () => {
  return (
    <JobItemsList>
      <JobBatches />
    </JobItemsList>
  );
};

export default JobList;
