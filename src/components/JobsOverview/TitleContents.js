import React from "react";
import { JobTitle, Text } from "./jobsElements";
import PropTypes from "prop-types";

const TitleContents = ({ jobTitle, company, place, jobType, jobSector }) => {
  return (
    <>
      <JobTitle>{jobTitle}</JobTitle>
      <Text>{company}</Text>
      <Text>
        {place} | {jobType}
      </Text>
      <Text>{jobSector}</Text>
    </>
  );
};

TitleContents.propTypes = {
  place: PropTypes.string,
  jobTitle: PropTypes.string,
  company: PropTypes.string,
  jobType: PropTypes.string,
  jobSector: PropTypes.string,
};

export default TitleContents;
