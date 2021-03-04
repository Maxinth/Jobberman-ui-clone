import React from "react";
import styled from "styled-components";
import JobsList from "./JobsList";
import PropTypes from "prop-types";
const Container = styled.section``;

const JobsListed = ({ data }) => {
  return (
    <Container>
      <JobsList data={data} />
    </Container>
  );
};

JobsListed.propTypes = {
  data: PropTypes.array,
};

export default JobsListed;
