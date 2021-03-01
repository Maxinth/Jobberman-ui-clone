import React from "react";
import ItemMain from "./ItemMain";

const GenerateFilterItem = ({ data = [] }) => {
  return (
    <>
      {data.map((item, index) => (
        <ItemMain key={index} {...item} />
      ))}
    </>
  );
};

export default GenerateFilterItem;
