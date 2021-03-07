import React from "react";
import { JobsListContainer } from "./jobsElements";
import JobCard from "./JobCard";
import PropTypes from "prop-types";

const GenerateJobsList = ({ jobs, iconColor, icon }) => {
  return (
    <JobsListContainer>
      {jobs.map((item, index) => (
        <JobCard
          {...item}
          key={`${index}${item.company}`}
          icon={icon}
          iconColor={iconColor}
        />
      ))}
    </JobsListContainer>
  );
};

GenerateJobsList.propTypes = {
  jobs: PropTypes.array,
  iconColor: PropTypes.string,
  icon: PropTypes.object,
};
export default GenerateJobsList;
