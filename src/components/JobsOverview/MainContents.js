import React from "react";
import { InnerContainer, TitleContainer } from "./jobsElements";
import JobIcon from "./JobIcon";
import TitleContents from "./TitleContents";
import PropTypes from "prop-types";

const MainContents = ({ jobTitle, company, place, jobType, jobSector }) => {
  return (
    <InnerContainer>
      <JobIcon />
      <TitleContainer>
        <TitleContents
          jobTitle={jobTitle}
          company={company}
          place={place}
          jobType={jobType}
          jobSector={jobSector}
        />
      </TitleContainer>
    </InnerContainer>
  );
};

MainContents.propTypes = {
  place: PropTypes.string,
  jobTitle: PropTypes.string,
  company: PropTypes.string,
  jobType: PropTypes.string,
  jobSector: PropTypes.string,
};

export default MainContents;
