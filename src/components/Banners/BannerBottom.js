import React from "react";
import { Heading, Container } from "./banner.elements";
import PropTypes from "prop-types";
import MockVideoSection from "./MockVideoSection";

const BannerBottom = ({ mainHeading }) => {
  return (
    <Container>
      {/* hidden on index page - shown on Jobseeker banner */}
      <Heading as="h1" bg>
        Get the Right Job Vacancies & Careers in Nigeria
      </Heading>
      {/* hidden on index page - shown on Jobseeker banner */}
      <Heading>{mainHeading}</Heading>
      <MockVideoSection />
    </Container>
  );
};

BannerBottom.propTypes = {
  mainHeading: PropTypes.string,
};
export default BannerBottom;
