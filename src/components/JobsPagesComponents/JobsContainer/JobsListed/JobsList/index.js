import React from "react";
import { Box } from "./styled";
import JobItemCard from "./JobItemCard";
import PropTypes from "prop-types";
import MockPagination from "./MockPagination";

const JobsList = ({ data }) => {
  return (
    <Box main item>
      {data.map((item, index) => (
        <JobItemCard key={index} {...item} />
      ))}
      <MockPagination />
    </Box>
  );
};

JobsList.propTypes = {
  data: PropTypes.array,
};

export default JobsList;
