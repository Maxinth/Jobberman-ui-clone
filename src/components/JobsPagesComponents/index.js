import React from "react";
import FindAJob from "./FindAJob";
import { JobsContainer } from "./FindAJob/styled";
import { Container } from "../StandOut/standOutElements";
import JobsNav from "./JobsNav";
import styled from "styled-components";

const ContentsBox = styled(Container)`
  padding: 0.5rem 1.5rem;
`;
const JobsPage = () => {
  return (
    <JobsContainer>
      <FindAJob />
      <ContentsBox>
        <JobsNav />
      </ContentsBox>
    </JobsContainer>
  );
};

export default JobsPage;
