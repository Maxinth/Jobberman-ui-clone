import React from "react";
import PropTypes from "prop-types";
import NoMatchingJobs from "./NoMatchingJobs";
import FeaturedJobs from "./FeaturedJobs";

const JobsFilterView = ({ data }) => {
  return (
    <>
      {data.length !== 0 && <FeaturedJobs />}
      {data.length === 0 && <NoMatchingJobs />}
    </>
  );
};

JobsFilterView.propTypes = {
  data: PropTypes.array,
};

export default JobsFilterView;
