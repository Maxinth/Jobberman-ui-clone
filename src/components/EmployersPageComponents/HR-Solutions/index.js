import React from "react";
import {
  MainContainer,
  FeaturedContainer,
  Heading,
  PriceBox,
} from "../FeaturedProduct/styled";
import { ConnectBox as ProductBox } from "../../Connect/styled";
import EndToEnd from "./EndToEnd";

const HrSolutions = () => {
  return (
    <FeaturedContainer>
      <Heading>Personalised HR solutions </Heading>
      <MainContainer>
        <ProductBox>
          <EndToEnd />
        </ProductBox>
        {/* second section */}
        <PriceBox>here too</PriceBox>
      </MainContainer>
    </FeaturedContainer>
  );
};

export default HrSolutions;
