import React from "react";
import { InnerBox } from "./styled";
import PropTypes from "prop-types";
import TimeBox from "./TimeBox";
import InnerTopBox from "./InnerTopBox";

const DetailsBottomSection = ({ jobModule, time }) => {
  return (
    <InnerBox main>
      <InnerTopBox jobModule={jobModule} />
      <TimeBox time={time} />
    </InnerBox>
  );
};

DetailsBottomSection.propTypes = {
  jobModule: PropTypes.string,
  time: PropTypes.string,
};

export default DetailsBottomSection;
