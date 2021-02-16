import PropTypes from "prop-types";
import CategoryItem from "./CategoryItem";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";

const GenerateCategories = ({ data, icon = <CheckRoundedIcon /> }) => {
  return (
    <>
      {data.map((item, index) => (
        <CategoryItem key={index} item={item} icon={icon} />
      ))}
    </>
  );
};

GenerateCategories.propTypes = {
  data: PropTypes.array,
  icon: PropTypes.object,
};

export default GenerateCategories;
