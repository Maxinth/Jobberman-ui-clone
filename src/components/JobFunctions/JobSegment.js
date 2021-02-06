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

const JobSegment = ({ text, items }) => {
  const { value, id } = checkItemName(text);
  return (
    <SegmentContainer>
      <Letter>{text}</Letter>
      <JobsStartingWithLetter paddingFix={value} id={id}>
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
