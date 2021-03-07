import { getSlidePosition } from "../useSlider";
import { Container } from "./styled";
import React from "react";
import GenerateCompanyBoxes from "./GenerateCompanyBoxes";

const CompaniesLogo = ({ items, index }) => {
  const slidePosition = (itemIndex) => {
    return getSlidePosition(index, itemIndex, items);
  };

  return (
    <Container>
      <GenerateCompanyBoxes items={items} slidePosition={slidePosition} />
    </Container>
  );
};

export default CompaniesLogo;
