import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import JobSegment from "./JobSegment";
const JobItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-overflow: ellipsis;
  > * {
    width: 100%;
  }
`;
const JobBatch = ({ batch }) => {
  // console.log(batch);
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
