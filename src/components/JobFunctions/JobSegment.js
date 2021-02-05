import styled from "styled-components";
import { Link } from "react-router-dom";

const SegmentContainer = styled.div`
  display: flex;
`;

const Letter = styled.span`
  padding: 1rem;
  border-right: 1px solid rgb(226, 22, 240);
`;
const JobsStartingWithLetter = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.6;
  padding: 0.1rem 1rem;
`;
const Jobs = styled(Link)`
  color: inherit;
  text-overflow: ellipsis;
  transition: color 0.2;

  &:hover {
    color: rgb(36, 133, 175);
  }
`;

const JobSegment = () => {
  return (
    <SegmentContainer>
      <Letter>A</Letter>
      <JobsStartingWithLetter>
        <Jobs>Accounting, Auditing & Finance</Jobs>
        <Jobs>Admin & Office</Jobs>
      </JobsStartingWithLetter>
    </SegmentContainer>
  );
};

export default JobSegment;
