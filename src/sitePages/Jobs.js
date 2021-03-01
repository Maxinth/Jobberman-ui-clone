import React from "react";
import JobsPage from "../components/JobsPagesComponents";
import TransitionBox from "./TransitionBox";

const Jobs = () => {
  return (
    <TransitionBox>
      <JobsPage />
    </TransitionBox>
  );
};

export default Jobs;
