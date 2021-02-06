import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { checkItemName } from "./data";
const SegmentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  text-overflow: ellipsis;
  /* justify-content: space-around; */

  @media (min-width: 1200px) {
    font-size: 0.9rem;
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
  padding: 0.1rem 1rem;
  border-left: 1px solid rgb(226, 22, 240);
  flex: 1;
  /* text-align: center; */
  margin-left: ${({ paddingFix }) =>
    paddingFix ? `${paddingFix}rem` : "1rem"};
  /* @media (min-width: 700px) {
    flex-direction: row;
  } */
`;
const JobLink = styled(Link)`
  color: inherit;
  text-overflow: ellipsis;
  transition: color 0.2;
  /* margin-bottom: 0.5rem; */

  margin-right: 0.5rem;

  &:hover {
    color: rgb(36, 133, 175);
  }
`;

const JobSegment = ({ text, items }) => {
  console.log(text);
  console.log(checkItemName(text));
  return (
    <SegmentContainer>
      <Letter>{text}</Letter>
      <JobsStartingWithLetter paddingFix={checkItemName(text)}>
        {items.map((item, index) => (
          <JobLink to="/" key={index}>
            {item}
          </JobLink>
        ))}
      </JobsStartingWithLetter>
    </SegmentContainer>
  );
};

JobSegment.propTypes = {
  text: PropTypes.string,
  items: PropTypes.array,
};
export default JobSegment;
