import React from "react";
import { Container, Heading } from "../FindHelp/findHelp.elements";
import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";
import JobCard from "./JobCard";
// styled.``
const JobsContainer = styled.section``;
const JobSection = styled.section`
  border-top: 1px solid black;
  padding: 1rem;
`;
const JobHeader = styled.h4`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 1rem;
`;

const JobsView = () => {
  return (
    <Container>
      <Heading>Top Jobs</Heading>
      <JobsContainer>
        {/* move into its own component */}
        <JobSection>
          <JobHeader>
            Featured Jobs <StarIcon />
          </JobHeader>
          <JobCard />
        </JobSection>
        {/* move into its own component */}
      </JobsContainer>
    </Container>
  );
};

export default JobsView;
