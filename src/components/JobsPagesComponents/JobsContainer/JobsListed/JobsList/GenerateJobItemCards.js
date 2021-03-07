import React from "react";
import PropTypes from "prop-types";
import JobItemCard from "./JobItemCard";

const GenerateJobItemCards = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <JobItemCard key={index} {...item} />
      ))}
    </>
  );
};

GenerateJobItemCards.propTypes = {
  data: PropTypes.array,
};

export default GenerateJobItemCards;
