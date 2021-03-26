import React from "react";
import JobsPage from "../components/JobsPagesComponents";
import TransitionBox from "./TransitionBox";
import useTitle from "../components/useTitle";

const Jobs = () => {
  useTitle("Jobs in Nigeria");
  return (
    <TransitionBox>
      <JobsPage />
    </TransitionBox>
  );
};

export default Jobs;
