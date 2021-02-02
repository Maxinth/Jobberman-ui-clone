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
  text-transform: uppercase;
  color: #333;

  svg {
    color: ${(props) => props.color};
    font-size: 2.5rem;
  }
`;

const JobSectionContainer = styled.section`
  border-top: 1px solid rgb(223, 209, 219);
  padding: 1rem;
  margin-bottom: 3rem;
  margin-top: 1rem;

  @media (min-width: 1250px) {
    border-top: 1px solid rgb(223, 209, 219);
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;

  a {
    color: orange;
    text-transform: uppercase;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
  }
`;

const JobsListContainer = styled.div`
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    > * {
      margin-right: 1rem;
    }
  }
  @media (min-width: 1250px) {
    > * {
      margin-right: unset;
    }
    display: block;
  }
`;

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
