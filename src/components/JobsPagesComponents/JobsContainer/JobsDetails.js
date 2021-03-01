import React from "react";
import styled from "styled-components";
import CTA from "../../CTA";
import { Btn } from "../../StandOut/standOutElements";
import JobCount from "./JobCount";
import FeaturedJobs from "./FeaturedJobs";
import JobsListed from "./JobsListed";

const Container = styled.section`
  padding: 1rem 0;
  /* border: 1px solid red; */
  > ${Btn} {
    width: 100%;
  }

  @media (min-width: 1024px) {
    > ${Btn} {
      display: none;
    }
  }

  @media (min-width: 1140px) {
    width: 65%;
  }
`;

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
