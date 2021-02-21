import React from "react";
import { ContactPageBox, Heading } from "../styled";
import PropTypes from "prop-types";

const AllContactPages = ({ content, heading }) => {
  return (
    <>
      <Heading>{heading}</Heading>
      <ContactPageBox>{content}</ContactPageBox>
    </>
  );
};

AllContactPages.propTypes = {
  content: PropTypes.object,
  heading: PropTypes.string,
};

export default AllContactPages;
