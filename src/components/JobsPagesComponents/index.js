import React from "react";
import FindAJob from "./FindAJob";
import { JobsSection } from "./FindAJob/styled";
import { Container } from "../StandOut/standOutElements";
import JobsNav from "./JobsNav";
import styled from "styled-components";
import JobsContainer from "./JobsContainer";

const ContentsBox = styled(Container)`
  padding: 0.5rem 1.5rem;
`;

const JobsPage = () => {
  return (
    <JobsSection>
      <FindAJob />
      <ContentsBox>
        <JobsNav />
        <JobsContainer />
      </ContentsBox>
    </JobsSection>
  );
};

export default JobsPage;
