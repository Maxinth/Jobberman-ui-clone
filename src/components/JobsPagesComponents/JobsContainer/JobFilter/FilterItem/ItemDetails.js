import React from "react";
import { SubContainer, Span } from "./styled";
import ItemSubName from "./ItemSubName";

const ItemDetails = ({ selected, handleSelect }) => {
  return (
    <SubContainer onClick={handleSelect}>
      <ItemSubName selected={selected} />
      <Span>159</Span>
    </SubContainer>
  );
};

export default ItemDetails;
