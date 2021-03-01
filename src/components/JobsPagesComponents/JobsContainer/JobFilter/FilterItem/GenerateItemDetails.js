import React from "react";
import ItemDetails from "./ItemDetails";

const GenerateItemDetails = ({ data, selected, handleSelect }) => {
  return (
    <>
      {data.map((item, index) => (
        <ItemDetails
          selected={selected}
          handleSelect={handleSelect}
          key={index}
          {...item}
        />
      ))}
    </>
  );
};

export default GenerateItemDetails;
