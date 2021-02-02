import React from "react";
import { Link } from "react-router-dom";
import JobCard from "./JobCard";
import PropTypes from "prop-types";
import {
  JobSectionContainer,
  JobHeader,
  JobsListContainer,
  LinkContainer,
} from "./jobsElements";

const JobSection = ({ title, jobs, icon, iconColor }) => {
  return (
    <JobSectionContainer>
      <JobHeader color={iconColor}>
        {title} {icon}
      </JobHeader>
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
