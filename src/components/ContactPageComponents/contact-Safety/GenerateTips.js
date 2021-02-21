import React from "react";
import Tip from "./Tip";
import { TipContainer } from "./styled";
import PropTypes from "prop-types";

const GenerateTips = ({ data }) => {
  return (
    <TipContainer>
      {data.map((item, index) => (
        <Tip key={index} item={item} />
      ))}
    </TipContainer>
  );
};

GenerateTips.propTypes = {
  data: PropTypes.array,
};

export default GenerateTips;
