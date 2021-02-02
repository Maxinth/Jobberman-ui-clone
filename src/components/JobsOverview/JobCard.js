import React from "react";
import styled from "styled-components";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import StarIcon from "@material-ui/icons/Star";
import PropTypes from "prop-types";

const Container = styled.section`
  background-color: #fff;
  padding: 1rem;
  font-family: "Open Sans", sans-serif;
  box-shadow: 1px 2px 4px grey;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const JobTitle = styled.h4``;
const TitleContainer = styled.div`
  margin-left: 2rem;
`;
const Text = styled.p`
  font-size: 0.9rem;
`;
const InnerContainer = styled.section`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
`;

const IconContainer = styled.div`
  background-color: #333;
  border-radius: 100px;
  padding: 1rem;

  svg {
    font-size: 5rem;
    color: #fff;
  }
`;
const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    color: ${(props) => props.iconColor};
  }

  svg {
    font-size: 1rem;
  }
`;
const TimeStamp = styled.span`
  margin-left: 0.5rem;
`;

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
