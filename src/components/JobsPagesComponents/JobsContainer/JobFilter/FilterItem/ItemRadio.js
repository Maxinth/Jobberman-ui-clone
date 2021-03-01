import React from "react";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import PropTypes from "prop-types";

const ItemRadio = ({ selected }) => {
  return (
    <>{!selected ? <RadioButtonUncheckedIcon /> : <RadioButtonCheckedIcon />}</>
  );
};

ItemRadio.propTypes = {
  selected: PropTypes.bool,
};

export default ItemRadio;
