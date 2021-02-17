import { Container, Heading, CardsContainer } from "./styled";
import GeneratePriceCards from "./GeneratePriceCards";
import React from "react";

const ProductsAndPricing = () => {
  return (
    <Container>
      <Heading>Products & Pricing </Heading>
      <CardsContainer>
        <GeneratePriceCards />
      </CardsContainer>
    </Container>
  );
};

export default ProductsAndPricing;
