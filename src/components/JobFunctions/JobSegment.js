import { SegmentContainer, Letter, JobsStartingWithLetter } from "./styled";
import PropTypes from "prop-types";
import { checkItemName } from "./data";
import GenerateJobLink from "./GenerateJobLink";
import React from "react";

const JobSegment = ({ text, items }) => {
  const { value, id } = checkItemName(text);
  return (
    <SegmentContainer>
      <Letter>{text}</Letter>
      <JobsStartingWithLetter paddingFix={value} id={id}>
        <GenerateJobLink items={items} />
      </JobsStartingWithLetter>
    </SegmentContainer>
  );
};

JobSegment.propTypes = {
  text: PropTypes.string,
  items: PropTypes.array,
};
export default JobSegment;
