import React from "react";
import styled from "styled-components";

const ContentBox = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  line-height: 1.8;
  transform: translate(-80px, -50px);
  color: rgb(78, 85, 89);
  font-size: 0.9rem;
`;
const Heading = styled.h3``;
export const Span = styled.span`
  font-size: 0.9rem;
  color: ${({ clr }) => clr};
  > svg {
    color: inherit;
    margin-top: 0.2rem;
  }
`;
const Location = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contents = ({ position, company, location, jobType, jobModule }) => {
  return (
    <ContentBox>
      <Heading>{position}</Heading>
      <Span>{company}</Span>
      <Location>
        <Span>{location}</Span>
        <Span>{jobType}</Span>
      </Location>
      <Span>{jobModule}</Span>
    </ContentBox>
  );
};

export default Contents;
