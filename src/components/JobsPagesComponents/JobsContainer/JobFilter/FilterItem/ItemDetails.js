import React from "react";
import { SubContainer, Span } from "./styled";
import ItemSubName from "./ItemSubName";

const ItemDetails = ({ selected, handleSelect, count, itemName }) => {
  return (
    <SubContainer onClick={handleSelect}>
      <ItemSubName selected={selected} name={itemName} />
      {count && <Span>{count}</Span>}
    </SubContainer>
  );
};

export default ItemDetails;
