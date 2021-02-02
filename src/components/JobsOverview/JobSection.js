import React from "react";
import { Link } from "react-router-dom";
import JobCard from "./JobCard";
import styled from "styled-components";
import PropTypes from "prop-types";

const JobHeader = styled.h4`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 1rem;

  svg {
    color: ${(props) => props.color};
  }
`;

const JobSectionContainer = styled.section`
  border-top: 1px solid black;
  padding: 1rem;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;

  a {
    color: orange;
    text-transform: uppercase;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
  }
`;

const JobSection = ({ title, jobs, icon, iconColor }) => {
  return (
    <JobSectionContainer>
      <JobHeader color={iconColor}>
        {title} {icon}
      </JobHeader>
      {jobs.map((item, index) => (
        <JobCard
          {...item}
          key={`${index}${item.company}`}
          icon={icon}
          iconColor={iconColor}
        />
      ))}

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
