import { ListItem, ItemText } from "./styled";
import PropTypes from "prop-types";

const CategoryItem = ({ item, icon }) => {
  return (
    <ListItem>
      {icon}
      <ItemText bold={item === "And more"}>{item}</ItemText>
    </ListItem>
  );
};

CategoryItem.propTypes = {
  item: PropTypes.string,
  icon: PropTypes.object,
};

export default CategoryItem;
