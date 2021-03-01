import React from "react";
import { Container } from "./styled";
import CTA from "../../CTA";
import JobCount from "./JobCount";
import FeaturedJobs from "./FeaturedJobs";
import JobsListed from "./JobsListed";

const JobsDetails = () => {
  return (
    <Container>
      <CTA text="search filter" goTo="/" />
      <JobCount />
      <FeaturedJobs />
      <JobsListed />
    </Container>
  );
};

export default JobsDetails;
