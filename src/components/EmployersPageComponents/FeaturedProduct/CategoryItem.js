import { ListItem, ItemText } from "./styled";
import PropTypes from "prop-types";
import React from "react";
import { colorIconByCardIndex } from "./categoryData";
const CategoryItem = ({ item, icon, index }) => {
  return (
    <ListItem match={colorIconByCardIndex(index)}>
      {icon}
      <ItemText bold={item === "And more"}>{item}</ItemText>
    </ListItem>
  );
};

CategoryItem.propTypes = {
  item: PropTypes.string,
  icon: PropTypes.object,
  index: PropTypes.number,
};

export default CategoryItem;
