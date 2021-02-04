import React from "react";
import { HowTosContainer } from "./standOutElements";
import StandOutCard from "./StandOutCard";
import PropTypes from "prop-types";
import CTA from "../CTA";

const HowToBlock = ({ data }) => {
  return (
    <>
      <HowTosContainer>
        {data.map((item, index) => (
          <StandOutCard {...item} key={index} />
        ))}
      </HowTosContainer>
      <CTA text="Create Your Account" goTo="/sign-up" />
    </>
  );
};

HowToBlock.propTypes = {
  data: PropTypes.array,
};

export default HowToBlock;
