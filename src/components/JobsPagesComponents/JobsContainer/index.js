import React from "react";
import styled from "styled-components";
import JobsFilter from "./JobFilter";
import JobsDetails from "./JobsDetails";

const JobsMainContainer = styled.section`
  @media (min-width: 1140px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const JobsContainer = () => {
  return (
    <JobsMainContainer>
      <JobsDetails />
      <JobsFilter />
    </JobsMainContainer>
  );
};

export default JobsContainer;
