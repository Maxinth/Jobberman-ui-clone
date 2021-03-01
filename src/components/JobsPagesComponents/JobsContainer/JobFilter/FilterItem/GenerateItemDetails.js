import React from "react";
import ItemDetails from "./ItemDetails";
import PropTypes from "prop-types";

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

GenerateItemDetails.propTypes = {
  data: PropTypes.array,
  itemSelected: PropTypes.string,
  handleSelect: PropTypes.func,
};

export default GenerateItemDetails;
