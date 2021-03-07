import React from "react";
import PropTypes from "prop-types";
import { RadioButtonUnchecked, RadioButtonChecked } from "./styled";

const RadioButtonDisplayed = ({ checked, radioInputProps }) => {
  return (
    <>
      {!checked ? (
        <RadioButtonUnchecked {...radioInputProps} />
      ) : (
        <RadioButtonChecked {...radioInputProps} />
      )}
    </>
  );
};

RadioButtonDisplayed.propTypes = {
  checked: PropTypes.bool,
  radioInputProps: PropTypes.object,
};

export default RadioButtonDisplayed;
