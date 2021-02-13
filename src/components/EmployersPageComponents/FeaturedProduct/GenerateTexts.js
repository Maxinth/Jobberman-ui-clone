import { Text } from "../../StandOut/standOutElements";
import { productTexts } from "./categoryData";

const GenerateTexts = () => {
  return (
    <>
      {productTexts.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </>
  );
};

export default GenerateTexts;
