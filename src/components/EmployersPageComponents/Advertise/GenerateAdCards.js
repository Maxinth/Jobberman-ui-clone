import { HowTosContainer } from "./styled";
import PropTypes from "prop-types";
import StandOutCard from "../../StandOut/StandOutCard";
import React from "react";

const GenerateAdCards = ({ data = [], withBtn }) => {
  return (
    <HowTosContainer>
      {data.map((item, index) => (
        <StandOutCard key={index} {...item} withBtn={withBtn} />
      ))}
    </HowTosContainer>
  );
};

GenerateAdCards.propTypes = {
  data: PropTypes.array,
  withBtn: PropTypes.bool,
};

export default GenerateAdCards;
