import styled, { css } from "styled-components";
import { Container } from "../../JobCount/styled";

const JobContainer = styled(Container)`
  padding: 2rem 1rem;
  line-height: 1.9;
  margin-bottom: 1rem;
`;
const Box = styled.div`
  margin-top: ${({ main }) => (main ? "1rem" : "unset")};
  color: rgb(78, 85, 89);
  font-family: "Roboto", sans-serif;
  line-height: 1.7;

  // pad prop
  ${({ pad }) =>
    pad &&
    css`
      padding: 1rem;
      border-top: 1px solid rgb(238, 238, 238);
      transform: translateY(20px);
    `}

  // flex prop
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      align-items: center;

      > svg {
        color: rgb(92, 184, 92);
      }
    `}

    
    ${({ flexTwo }) =>
    flexTwo &&
    css`
      display: flex;
      align-items: flex-start;
      @media (min-width: 770px) {
        align-items: center;
      }
    `};
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
const Text = styled.p`
  text-overflow: ellipsis;
  @media (min-width: 800px) {
    text-overflow: unset;
  }
`;
const DetailsBox = styled.div`
  font-size: 0.9rem;
`;
const Span = styled.span`
  font-weight: ${({ bold }) => (bold ? "bold" : "unset")};

  ${({ pad }) =>
    pad &&
    css`
      padding: 0.5rem;
      background-color: #4e5559;
      border-radius: 100px;
      margin-right: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  > svg {
    font-size: 1.8rem;
    color: #fff;
  }
`;

export { Span, DetailsBox, Text, Post, InnerBox, Box, JobContainer };
