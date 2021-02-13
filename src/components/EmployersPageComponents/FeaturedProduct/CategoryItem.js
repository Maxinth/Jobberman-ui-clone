import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import styled from "styled-components";
import PropTypes from "prop-types";

const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 0.5rem;
  svg {
    font-size: 0.8rem;
    color: rgb(255, 98, 0);
    margin-right: 0.5rem;
  }
`;
const ItemText = styled.span`
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  text-transform: capitalize;
  color: rgb(78, 85, 89);
`;

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
