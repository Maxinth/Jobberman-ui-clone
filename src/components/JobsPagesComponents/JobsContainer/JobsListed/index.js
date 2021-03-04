import React from "react";
import styled from "styled-components";
import JobsList from "./JobsList";
import PropTypes from "prop-types";
import { useGlobalContext } from "../../../context";
const Container = styled.section``;

const JobsListed = ({ data }) => {
  // const { pageNo, data } = useGlobalContext();
  // console.log(pageNo);

  return (
    <Container>
      {/* <JobsList data={data} /> */}
      <JobsList data={data} />
    </Container>
  );
};

JobsListed.propTypes = {
  data: PropTypes.array,
};

export default JobsListed;
