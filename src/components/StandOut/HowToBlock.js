import React from "react";
import { HowTosContainer, Btn } from "./standOutElements";
import { Link } from "react-router-dom";
import StandOutCard from "./StandOutCard";
import PropTypes from "prop-types";

const HowToBlock = ({ data }) => {
  return (
    <>
      <HowTosContainer>
        {data.map((item, index) => (
          <StandOutCard {...item} key={index} />
        ))}
      </HowTosContainer>
      <Btn>
        <Link to="/sign-up">Create Your Account</Link>
      </Btn>
    </>
  );
};

HowToBlock.propTypes = {
  data: PropTypes.array,
};

export default HowToBlock;
