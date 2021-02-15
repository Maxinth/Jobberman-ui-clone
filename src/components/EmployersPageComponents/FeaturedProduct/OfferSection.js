import GenerateTexts from "./GenerateTexts";
import { Heading } from "./styled";
import { productTexts } from "./categoryData";
const OfferSection = () => {
  return (
    <>
      <Heading as="h4">
        We now offer skills assessments when creating a job listing
      </Heading>
      <GenerateTexts data={productTexts} />
    </>
  );
};

export default OfferSection;
