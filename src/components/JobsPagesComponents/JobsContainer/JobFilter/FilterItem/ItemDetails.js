import React from "react";
import { SubContainer, Span } from "./styled";
import ItemSubName from "./ItemSubName";
import PropTypes from "prop-types";

const ItemDetails = ({ selected, handleSelect, count, itemName }) => {
  return (
    <SubContainer onClick={handleSelect}>
      <ItemSubName selected={selected} name={itemName} />
      {count && <Span>{count}</Span>}
    </SubContainer>
  );
};

ItemDetails.propTypes = {
  selected: PropTypes.bool,
  handleSelect: PropTypes.func,
  count: PropTypes.number,
  itemName: PropTypes.string,
};

export default ItemDetails;
