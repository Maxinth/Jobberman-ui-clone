import PropTypes from "prop-types";
import CategoryItem from "./CategoryItem";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import React from "react";
const GenerateCategories = ({ data, icon = <CheckRoundedIcon /> , itemIndex}) => {
  return (
    <>
      {data.map((item, index) => (
        <CategoryItem key={index} item={item} icon={icon} index={itemIndex}/>
      ))}
    </>
  );
};

GenerateCategories.propTypes = {
  data: PropTypes.array,
  icon: PropTypes.object,
  itemIndex: PropTypes.number,
};

export default GenerateCategories;
