import React from "react";
import { Box } from "./styled";
import JobItemCard from "./JobItemCard";
import { data } from "./data";

const JobsList = () => {
  return (
    <Box main item>
      {data.map((item, index) => (
        <JobItemCard key={index} {...item} />
      ))}
    </Box>
  );
};

export default JobsList;
