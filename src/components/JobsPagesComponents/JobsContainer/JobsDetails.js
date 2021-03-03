import React from "react";
import { Container } from "./styled";
import CTA from "../../CTA";
import JobCount from "./JobCount";
import JobsListed from "./JobsListed";
import JobsFilterView from "./JobsFilterView";
import PropTypes from "prop-types";

const JobsDetails = ({ data }) => {
  return (
    <Container>
      <CTA text="search filter" goTo="/" />
      <JobCount />
      <JobsFilterView data={data} />
      <JobsListed data={data} />
    </Container>
  );
};

JobsDetails.propTypes = {
  data: PropTypes.array,
};

export default JobsDetails;
