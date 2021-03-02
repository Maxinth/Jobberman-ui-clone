import React ,{useState} from "react";
import FindAJob from "./FindAJob";
import { JobsSection } from "./FindAJob/styled";
import { Container } from "../StandOut/standOutElements";
import JobsNav from "./JobsNav";
import styled from "styled-components";
import JobsContainer from "./JobsContainer";
import { data } from './data';

const ContentsBox = styled(Container)`
  padding: 0.5rem 3.5rem;
`;

const JobsPage = () => {
  const [jobs, setJobs] = useState(data);
  return (
    <JobsSection>
      <FindAJob />
      <ContentsBox>
        <JobsNav />
        <JobsContainer data={jobs}/>
      </ContentsBox>
    </JobsSection>
  );
};

export default JobsPage;
