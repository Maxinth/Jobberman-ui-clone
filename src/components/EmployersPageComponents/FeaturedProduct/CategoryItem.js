import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import { ListItem, ItemText } from "./styled";
import PropTypes from "prop-types";

const CategoryItem = ({ item }) => {
  return (
    <ListItem>
      <ArrowForwardIosRoundedIcon />
      <ItemText bold={item === "And more"}>{item}</ItemText>
    </ListItem>
  );
};

CategoryItem.propTypes = {
  item: PropTypes.string,
};

export default CategoryItem;
