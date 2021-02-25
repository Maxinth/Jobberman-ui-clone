import React from "react";
import PropTypes from "prop-types";
import { PriceBox, Currency, Price, PriceContainer, Span } from "./styled";

const PriceSection = ({ price, cvIncluded }) => {
  return (
    <PriceContainer>
      <PriceBox>
        <Currency>NGN</Currency>
        <Price>{price}</Price>
      </PriceBox>
      {cvIncluded && <Span>Cover Letter Included</Span>}
    </PriceContainer>
  );
};

PriceSection.propTypes = {
  price: PropTypes.string,
  cvIncluded: PropTypes.bool,
};

export default PriceSection;
