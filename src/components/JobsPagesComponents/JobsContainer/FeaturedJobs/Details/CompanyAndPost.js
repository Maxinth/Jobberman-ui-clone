import React from "react";
import { Heading, Span } from "./styled";
import PropTypes from "prop-types";

const CompanyAndPost = ({ position, company }) => {
  return (
    <>
      <Heading>{position}</Heading>
      <Span>{company}</Span>
    </>
  );
};

CompanyAndPost.propTypes = {
  position: PropTypes.string,
  company: PropTypes.string,
};

export default CompanyAndPost;
