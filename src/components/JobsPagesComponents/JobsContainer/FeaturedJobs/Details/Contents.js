import React from "react";
import PropTypes from "prop-types";
import { ContentBox, Span } from "./styled";
import JobLocation from "./JobLocation";
import CompanyAndPost from "./CompanyAndPost";

const Contents = ({ position, company, location, jobType, jobModule }) => {
  return (
    <ContentBox>
      <CompanyAndPost position={position} company={company} />
      <JobLocation location={location} jobType={jobType} />
      <Span blue>{jobModule}</Span>
    </ContentBox>
  );
};

Contents.propTypes = {
  position: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
  jobType: PropTypes.string,
  jobModule: PropTypes.string,
};
export default Contents;
