import { data } from "./categoryData";
import CategoryItem from "./CategoryItem";

const GenerateCategories = () => {
  return (
    <>
      {data.map((item, index) => (
        <CategoryItem key={index} item={item} />
      ))}
    </>
  );
};

export default GenerateCategories;
