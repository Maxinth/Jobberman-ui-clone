import JobSeekersSection from "../components/JobSeekerPageComponents/JobSeekersSection";
import TransitionBox from "./TransitionBox";
import React from "react";
import useTitle from "../components/useTitle";

const JobSeekers = () => {
  useTitle("Job Seeker Nigeria");
  return (
    <TransitionBox>
      <JobSeekersSection />
    </TransitionBox>
  );
};

export default JobSeekers;
