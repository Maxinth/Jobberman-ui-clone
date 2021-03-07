import React from "react";
import { Box } from "./styled";
import GenerateJobItemCards from "./GenerateJobItemCards";
import PropTypes from "prop-types";
import MockPagination from "./MockPagination";

const JobsList = ({ data }) => {
  return (
    <Box main item>
      <GenerateJobItemCards data={data} />
      <MockPagination />
    </Box>
  );
};

JobsList.propTypes = {
  data: PropTypes.array,
};

export default JobsList;
