import PropTypes from "prop-types";
import {PriceText} from './styled'
import React from "react";


const GeneratePriceTexts = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <PriceText key={index}>{item}</PriceText>
      ))}
    </>
  );
};

GeneratePriceTexts.propTypes = {
  data: PropTypes.array,
};
export default GeneratePriceTexts;
