import React, { useState } from "react";
import GenerateItemDetails from "./GenerateItemDetails";
import ItemName from "./ItemName";

const ItemMain = (props) => {
  const [selected, setIsSelected] = useState(false);
  const handleSelect = () => setIsSelected(!selected);
  const { filterTypeName, details } = props;
  return (
    <>
      <ItemName name={filterTypeName} />
      {/* drop down select */}
      <GenerateItemDetails
        data={details}
        handleSelect={handleSelect}
        selected={selected}
      />
    </>
  );
};

export default ItemMain;
