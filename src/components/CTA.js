import React from "react";
import { Link } from "react-router-dom";
import { Btn } from "./StandOut/standOutElements";
import PropTypes from "prop-types";

const CTA = ({ text, goTo, index, isBlack }) => {
  return (
    <Btn editBtn={index === 0 || index === 2 || isBlack}>
      <Link to={goTo}>{text}</Link>
    </Btn>
  );
};

CTA.propTypes = {
  text: PropTypes.string,
  goTo: PropTypes.string,
  index: PropTypes.number,
  isBlack: PropTypes.bool,
};
export default CTA;
