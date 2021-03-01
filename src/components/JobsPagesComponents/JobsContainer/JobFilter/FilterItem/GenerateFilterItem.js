import React from "react";
import ItemMain from "./ItemMain";
import PropTypes from "prop-types";

const GenerateFilterItem = ({ data = [] }) => {
  return (
    <>
      {data.map((item, index) => (
        <ItemMain key={index} {...item} />
      ))}
    </>
  );
};

GenerateFilterItem.propTypes = {
  data: PropTypes.array,
};

export default GenerateFilterItem;
