import React from "react";
import styled from "styled-components";
import JobsList from "./JobsList";

const Container = styled.section``;

const JobsListed = () => {
  return (
    <Container>
      <JobsList />
    </Container>
  );
};

export default JobsListed;
