import PropTypes from "prop-types";
import CategoryItem from "./CategoryItem";

const GenerateCategories = ({ data, icon }) => {
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
