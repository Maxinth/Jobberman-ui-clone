import React from "react";
import { Container } from "./styled";
import CTA from "../../CTA";
import JobCount from "./JobCount";
import FeaturedJobs from "./FeaturedJobs";
import JobsListed from "./JobsListed";
import PropTypes from "prop-types";

const JobsDetails = ({ data }) => {
  return (
    <Container>
      <CTA text="search filter" goTo="/" />
      <JobCount />
      <FeaturedJobs />
      <JobsListed data={data} />
    </Container>
  );
};

JobsDetails.propTypes = {
  data: PropTypes.array,
};

export default JobsDetails;
