import styled from "styled-components";
import { Heading } from "../Connect/styled";
import { Link } from "react-router-dom";
// index
const Container = styled.section`
  ${Heading} {
    margin-bottom: 1rem;
    margin-top: 3rem;
  }

  @media (min-width: 900px) {
    display: unset;
  }
`;
const JobItemsContainer = styled.div`
  padding: 2rem;
`;

// JobBatch
const JobItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-overflow: ellipsis;
  > * {
    width: 100%;
  }

  @media (min-width: 728px) {
    :nth-child(2) {
      margin-top: 2.7rem;
    }

    :nth-child(4) {
      margin-top: -2.9rem;
    }
  }
`;

// JobList
const JobItemsList = styled.ul`
  color: rgb(78, 85, 89);

  font-family: Roboto, sans-serif;
  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

// JobSegment

const SegmentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  text-overflow: ellipsis;
  /* justify-content: space-around; */

  @media (min-width: 1200px) {
    font-size: 0.9rem;
    /* line-height: 2; */
  }
`;

const Letter = styled.span`
  margin-right: 1rem;
  /* flex: 1; */
  font-weight: bolder;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
`;
const JobsStartingWithLetter = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.6;

  /* border-left: 1px solid rgb(226, 22, 240); */
  flex: 1;
  /* text-align: center; */
  margin-left: ${({ paddingFix }) =>
    paddingFix ? `${paddingFix}rem` : "1rem"};
  @media (min-width: 1354px) {
    margin-left: ${(props) => props.id && "1.1rem"};
    margin-left: ${(props) => props.id === "t" && "1.05rem"};
  }
`;
const JobLink = styled(Link)`
  color: inherit;
  text-overflow: ellipsis;
  transition: color 0.2;
  padding: 0rem 1rem;
  /* margin-bottom: 0.5rem; */
  border-left: 2px solid rgb(128, 128, 128);
  margin-right: 0.5rem;

  &:hover {
    color: rgb(36, 133, 175);
  }
`;

export {
  Container,
  JobItemsContainer,
  JobItemsList,
  Heading,
  SegmentContainer,
  Letter,
  JobsStartingWithLetter,
  JobLink,
  JobItem,
};
