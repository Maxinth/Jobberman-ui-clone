import React from "react";
import { BoldText, TipItem } from "./styled";
import PropTypes from "prop-types";

const Tip = ({ item }) => {
  return (
    <TipItem>
      <BoldText>{item}</BoldText>
    </TipItem>
  );
};

Tip.propTypes = {
  item: PropTypes.string,
};

export default Tip;
