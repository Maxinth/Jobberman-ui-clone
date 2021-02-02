import React from "react";
import styled from "styled-components";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import StarIcon from "@material-ui/icons/Star";

const Container = styled.section`
  background-color: #fff;
  padding: 1rem;
  font-family: "Open Sans", sans-serif;
  box-shadow: 1px 2px 4px grey;
  border-radius: 5px;
`;

const JobTitle = styled.h4``;
const TitleContainer = styled.div``;
const Text = styled.p`
  font-size: 0.9rem;
`;
const InnerContainer = styled.section`
  display: flex;
  justify-content: space-between;
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
    font-size: 1rem;
  }
`;
const TimeStamp = styled.span`
  margin-left: 0.5rem;
`;

const JobCard = () => {
  return (
    <Container>
      <InnerContainer>
        <IconContainer>
          <BusinessCenterIcon />
        </IconContainer>
        <TitleContainer>
          <JobTitle>Product and Marketing</JobTitle>
          <Text>World Bank</Text>
          <Text>Enugu | Full Time</Text>
          <Text>Marketing & Communications</Text>
        </TitleContainer>
      </InnerContainer>
      <Time>
        <StarIcon /> <TimeStamp>5d</TimeStamp>
      </Time>
    </Container>
  );
};

export default JobCard;
