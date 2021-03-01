import React from "react";
import ItemDetails from "./ItemDetails";

const GenerateItemDetails = ({ data, itemSelected, handleSelect }) => {
  return (
    <>
      {data.map((item, index) => (
        <ItemDetails
          selected={itemSelected === item.itemName}
          handleSelect={() => handleSelect(item.itemName)}
          key={index}
          {...item}
        />
      ))}
    </>
  );
};

export default GenerateItemDetails;
