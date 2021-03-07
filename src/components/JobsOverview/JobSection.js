import React from "react";
import { Link } from "react-router-dom";
import GenerateJobsList from "./GenerateJobsList";
import PropTypes from "prop-types";
import { JobSectionContainer, JobHeader, LinkContainer } from "./jobsElements";

const JobSection = ({ title, jobs, icon, iconColor }) => {
  return (
    <JobSectionContainer>
      <JobHeader color={iconColor}>
        {title} {icon}
      </JobHeader>
      <GenerateJobsList jobs={jobs} iconColor={iconColor} icon={icon} />

      <LinkContainer>
        <Link to="/">view all</Link>
      </LinkContainer>
    </JobSectionContainer>
  );
};

JobSection.propTypes = {
  title: PropTypes.string,
  iconColor: PropTypes.string,
  jobs: PropTypes.array,
  icon: PropTypes.object,
};
export default JobSection;
