import React from "react";
import PropTypes from "prop-types";
import { Container, Time, TimeStamp } from "./jobsElements";
import MainContents from "./MainContents";

const JobCard = ({
  duration,
  icon,
  jobTitle,
  company,
  place,
  jobType,
  jobSector,
  iconColor,
}) => {
  return (
    <Container>
      <MainContents
        jobTitle={jobTitle}
        company={company}
        place={place}
        jobType={jobType}
        jobSector={jobSector}
      />
      <Time iconColor={iconColor}>
        {icon} <TimeStamp>{duration}</TimeStamp>
      </Time>
    </Container>
  );
};

JobCard.propTypes = {
  jobTitle: PropTypes.string,
  company: PropTypes.string,
  place: PropTypes.string,
  jobType: PropTypes.string,
  jobSector: PropTypes.string,
  duration: PropTypes.string,
  icon: PropTypes.object,
  iconColor: PropTypes.string,
};
export default JobCard;
