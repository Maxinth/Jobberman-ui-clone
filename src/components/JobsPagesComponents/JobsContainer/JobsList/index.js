import React from "react";
import styled, { css } from "styled-components";
import { Container } from "../JobCount/styled";

import DetailsTopSection from "./DetailsTopSection";
import DetailsBottomSection from "./DetailsBottomSection";
const JobContainer = styled(Container)`
  padding: 2rem 1rem;
`;
const Box = styled.div`
  margin-top: ${({ main }) => (main ? "1rem" : "unset")};
  color: rgb(78, 85, 89);
  font-family: "Roboto", sans-serif;
  line-height: 1.7;
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      align-items: center;
    `}
`;

const InnerBox = styled.div`
  ${({ main }) =>
    main &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    `}
`;

const Post = styled.h4`
  font-size: 1.2rem;
`;
const Text = styled.p``;
const DetailsBox = styled.div`
  font-size: 0.9rem;
`;
const Span = styled.span`
  font-weight: ${({ bold }) => (bold ? "bold" : "unset")};
`;

const JobsList = () => {
  return (
    <Box main>
      <JobContainer>
        <Post>Web/Social Media Associate</Post>
        <DetailsBox>
          <DetailsTopSection />
          <DetailsBottomSection />
        </DetailsBox>
      </JobContainer>
    </Box>
  );
};

export default JobsList;
