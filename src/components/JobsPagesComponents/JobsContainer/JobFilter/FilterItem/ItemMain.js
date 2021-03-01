import React, { useState } from "react";
import GenerateItemDetails from "./GenerateItemDetails";
import ItemName from "./ItemName";
import { MainBox } from "./styled";

const ItemMain = (props) => {
  const { filterTypeName, details } = props;

  // state to toggle details
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails(!showDetails);

  // state to select a filter category via radio
  const [itemSelected, setItemSelected] = useState("");
  const handleSelect = (item) => setItemSelected(item);

  return (
    <MainBox>
      <ItemName name={filterTypeName} toggleDetails={toggleDetails} />
      {/* drop down select */}
      {showDetails && (
        <GenerateItemDetails
          data={details}
          handleSelect={handleSelect}
          itemSelected={itemSelected}
        />
      )}
    </MainBox>
  );
};

export default ItemMain;
