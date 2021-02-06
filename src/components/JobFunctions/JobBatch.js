import React from "react";
import PropTypes from "prop-types";
import { JobItem } from "./styled";
import JobSegment from "./JobSegment";

const JobBatch = ({ batch }) => {
  return (
    <JobItem>
      {batch.map((item, index) => (
        <JobSegment key={index} {...item} />
      ))}
    </JobItem>
  );
};

JobBatch.propTypes = {
  batch: PropTypes.array,
};
export default JobBatch;
