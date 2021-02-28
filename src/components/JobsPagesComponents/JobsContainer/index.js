import React from "react";
import styled from "styled-components";
import CTA from "../../CTA";
import { Btn } from "../../StandOut/standOutElements";
import JobCount from "./JobCount";
import FeaturedJobs from "./FeaturedJobs";
import JobsList from "./JobsList";

const Container = styled.section`
  padding: 1rem 0;
  ${Btn} {
    width: 100%;
  }
`;

const JobsContainer = () => {
  return (
    <Container>
      <CTA text="search filter" goTo="/" />
      <JobCount />
      <FeaturedJobs />
      <JobsList />
    </Container>
  );
};

export default JobsContainer;
