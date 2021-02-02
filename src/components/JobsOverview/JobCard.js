import React from "react";
import styled from "styled-components";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

import PropTypes from "prop-types";

const Container = styled.section`
  background-color: #fff;
  padding: 1rem;
  font-family: "Open Sans", sans-serif;
  box-shadow: 1px 2px 4px grey;
  border-radius: 5px;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: min-height 0.2s;
  min-height: 200px;

  @media (min-width: 1250px) {
    min-height: 170px;
  }
`;

const JobTitle = styled.h4`
  /* max-width: 200px; */
  margin-bottom: 0.2rem;
  color: #333;
  text-transform: uppercase;

  + p {
    font-weight: 600;
  }
  @media (min-width: 1000px) {
    max-width: 150px;
  }
  @media (min-width: 1100px) {
    max-width: 250px;
  }
`;
const TitleContainer = styled.div`
  margin-left: 1rem;
  color: rgb(78, 85, 89);
  transition: margin-left 0.2s;

  @media (max-width: 280px) {
    margin-left: 0.5rem;
  }
  @media (min-width: 700px) {
    margin-left: 2rem;
  }
  @media (min-width: 1000px) {
    margin-left: 0.5rem;
  }
`;
const Text = styled.p`
  font-size: 0.9rem;
  text-transform: capitalize;
`;
const InnerContainer = styled.section`
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

const IconContainer = styled.div`
  background-color: rgb(78, 85, 89);
  border-radius: 100px;
  padding: 0.5rem;

  svg {
    font-size: 2rem;
    color: #fff;
    transition: font-size 0.2s;
  }

  @media (min-width: 700px) {
    padding: 1rem;

    svg {
      font-size: 2rem;
    }
  }
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;

  svg {
    color: ${(props) => props.iconColor};
  }

  svg {
    font-size: 1rem;
  }
`;

const TimeStamp = styled.span`
  margin-left: 0.5rem;
  font-size: 0.9rem;
  color: rgb(78, 85, 89);
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
