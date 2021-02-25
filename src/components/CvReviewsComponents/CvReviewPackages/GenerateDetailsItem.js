import React from "react";
import DetailsListItem from "./DetailsListItem";
import PropTypes from "prop-types";

const GenerateDetailsItem = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <DetailsListItem key={index} {...item} />
      ))}
    </>
  );
};

GenerateDetailsItem.propTypes = {
  data: PropTypes.array,
};

export default GenerateDetailsItem;
