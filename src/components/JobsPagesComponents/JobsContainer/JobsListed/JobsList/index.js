import React from "react";
import { Box } from "./styled";
import JobItemCard from "./JobItemCard";
// import { data } from "./data";
import PropTypes from "prop-types";

const JobsList = ({ data }) => {
  return (
    <Box main item>
      {data.map((item, index) => (
        <JobItemCard key={index} {...item} />
      ))}
    </Box>
  );
};

JobsList.propTypes = {
  data: PropTypes.array,
};

export default JobsList;
