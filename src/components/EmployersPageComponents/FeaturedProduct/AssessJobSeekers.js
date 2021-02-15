import { PriceBox, AssessContainer } from "./styled";
import GenerateTexts from "./GenerateTexts";
import { mainTexts } from "./categoryData";
import PriceDetails from "./PriceDetails";

const AssessJobSeekers = () => {
  return (
    <AssessContainer>
      <GenerateTexts data={mainTexts} />
      <PriceBox>
        <PriceDetails />
      </PriceBox>
    </AssessContainer>
  );
};

export default AssessJobSeekers;
