import React from "react";
import { Span, TimeBox } from "./styled";
import PropTypes from "prop-types";

const TimeStamp = ({ iconOne, iconTwo, time, iconOneColor, iconTwoColor }) => {
  return (
    <TimeBox>
      <Span clr={iconOneColor}> {iconOne}</Span>
      {iconTwo && <Span clr={iconTwoColor}>{iconTwo}</Span>}
      <Span>{time}</Span>
    </TimeBox>
  );
};

TimeStamp.propTypes = {
  iconOne: PropTypes.object,
  iconOneColor: PropTypes.string,
  iconTwo: PropTypes.object,
  iconTwoColor: PropTypes.string,
  time: PropTypes.string,
};
export default TimeStamp;
