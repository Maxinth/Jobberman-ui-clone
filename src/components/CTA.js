import React from "react";
import { Link } from "react-router-dom";
import { Btn } from "./StandOut/standOutElements";
import PropTypes from "prop-types";

const CTA = ({ text, goTo }) => {
  return (
    <Btn>
      <Link to={goTo}>{text}</Link>
    </Btn>
  );
};

CTA.propTypes = {
  text: PropTypes.string,
  goTo: PropTypes.string,
};
export default CTA;
