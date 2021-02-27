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
export const Span = styled.span``;
const Location = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contents = () => {
  return (
    <>
      <ContentBox>
        <Heading>IT Sales Manager</Heading>
        <Span>Anonymous Employer</Span>
        <Location>
          <Span>Lagos</Span>
          <Span>Full Time</Span>
        </Location>
        <Span> Sales</Span>
      </ContentBox>
    </>
  );
};

export default Contents;
