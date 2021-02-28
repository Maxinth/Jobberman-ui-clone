import React from "react";
import styled from "styled-components";
import JobsList from "./JobsList";

const Container = styled.section``;

const JobsListAndFilter = () => {
  return (
    <Container>
      <JobsList />
    </Container>
  );
};

export default JobsListAndFilter;
