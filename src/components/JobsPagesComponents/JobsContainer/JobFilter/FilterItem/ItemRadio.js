import React from "react";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

const ItemRadio = ({ selected }) => {
  return (
    <>{!selected ? <RadioButtonUncheckedIcon /> : <RadioButtonCheckedIcon />}</>
  );
};

export default ItemRadio;
