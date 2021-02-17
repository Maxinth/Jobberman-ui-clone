import { PriceBox, AssessContainer } from "./styled";
import GenerateTexts from "./GenerateTexts";
import { mainTexts } from "./categoryData";
import PriceDetails from "./PriceDetails";
import React from "react";

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
