import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PriceBox = styled.div`
  padding: 2rem;
  text-align: center;
  font-family: "Open Sans", sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Currency = styled.sup`
  font-size: 1rem;
  font-weight: 500;
  transform: translateY(-6px);
  margin-right: 0.2rem;
`;
const Price = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
`;

const PriceContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(78, 85, 89);
`;

const Details = styled.span`
  font-size: 0.8rem;
  font-weight: 300;
  transform: translate(20px, -35px);
`;

const PriceSection = ({ price, cvIncluded }) => {
  return (
    <PriceContainer>
      <PriceBox>
        <Currency>NGN</Currency>
        <Price>{price}</Price>
      </PriceBox>
      {cvIncluded && <Details>Cover Letter Included</Details>}
    </PriceContainer>
  );
};

PriceSection.propTypes = {
  price: PropTypes.string,
  cvIncluded: PropTypes.bool,
};

export default PriceSection;
