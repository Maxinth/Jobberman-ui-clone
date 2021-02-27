import React from "react";
import { Span, Location } from "./styled";
import PropTypes from "prop-types";

const JobLocation = ({ location, jobType }) => {
  return (
    <Location>
      <Span>{location}</Span>
      <Span>{jobType}</Span>
    </Location>
  );
};

JobLocation.propTypes = {
  location: PropTypes.string,
  jobType: PropTypes.string,
};

export default JobLocation;
