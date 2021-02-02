import React from "react";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import PropTypes from "prop-types";
import {
  Container,
  InnerContainer,
  IconContainer,
  TitleContainer,
  JobTitle,
  Text,
  Time,
  TimeStamp,
} from "./jobsElements";

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
      <InnerContainer>
        <IconContainer>
          <BusinessCenterIcon />
        </IconContainer>
        <TitleContainer>
          <JobTitle>{jobTitle}</JobTitle>
          <Text>{company}</Text>
          <Text>
            {place} | {jobType}
          </Text>
          <Text>{jobSector}</Text>
        </TitleContainer>
      </InnerContainer>
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
