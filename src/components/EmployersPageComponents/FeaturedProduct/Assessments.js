import { Heading, Categories } from "./styled";
import GenerateCategories from "./GenerateCategories";

const Assessments = () => {
  return (
    <>
      <Heading as="h4">Assessments available for these categories </Heading>
      <Categories>
        <GenerateCategories />
      </Categories>
    </>
  );
};

export default Assessments;
