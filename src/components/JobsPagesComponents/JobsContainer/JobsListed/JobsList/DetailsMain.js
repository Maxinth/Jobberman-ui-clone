import React from "react";
import { DetailsBox } from "./styled";
import DetailsTopSection from "./DetailsTopSection";
import DetailsBottomSection from "./DetailsBottomSection";
import PropTypes from "prop-types";

const DetailsMain = ({ detailsTopProps, jobModule, time }) => {
  return (
    <DetailsBox>
      <DetailsTopSection {...detailsTopProps} />
      <DetailsBottomSection jobModule={jobModule} time={time} />
    </DetailsBox>
  );
};

DetailsMain.propTypes = {
  detailsToProps: PropTypes.object,
  jobModule: PropTypes.string,
  time: PropTypes.string,
};

export default DetailsMain;
