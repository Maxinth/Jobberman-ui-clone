import React from "react";
import { Box } from "./styled";
import JobItemCard from "./JobItemCard";
import { data } from "./data";

const JobsList = () => {
  return (
    <Box main>
      {data.map((item, index) => (
        <JobItemCard key={index} {...item} />
      ))}
    </Box>
  );
};

export default JobsList;
