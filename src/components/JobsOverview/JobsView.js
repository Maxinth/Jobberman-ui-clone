import React from "react";
import { Container, Heading } from "../FindHelp/findHelp.elements";
import styled from "styled-components";
import JobSection from "./JobSection";
import { data } from "./data";

const JobsContainer = styled.section``;

const JobsView = () => {
  const { featuredJobs } = data;
  return (
    <Container>
      <Heading>Top Jobs</Heading>
      <JobsContainer>
        <JobSection {...featuredJobs} />
      </JobsContainer>
    </Container>
  );
};

export default JobsView;
