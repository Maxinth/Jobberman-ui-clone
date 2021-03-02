import React from "react";
import JobsFilter from "./JobFilter";
import JobsDetails from "./JobsDetails";
import { JobsMainContainer } from "./styled";
// import { data } from "./data";
import PropTypes from "prop-types";

const JobsContainer = ({ data }) => {
  return (
    <JobsMainContainer>
      <JobsDetails data={data} />
      <JobsFilter />
    </JobsMainContainer>
  );
};

JobsContainer.propTypes = {
  data: PropTypes.array,
};
export default JobsContainer;
