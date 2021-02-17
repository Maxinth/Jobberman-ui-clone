import {
  ProductBox as PricingContainer,
  Heading,
  Text,
  Span,
} from "../FeaturedProduct/styled";
import { HelpContainer } from "../HelpSection/styled";
import styled from "styled-components";
import GeneratePriceCards from "./GeneratePriceCards";
import React from "react";

const Container = styled(HelpContainer)`
  font-family: "Roboto", sans-serif;
  flex-direction: column;
  max-width: unset;
  margin: unset;
  padding: 2rem;
  width: 100%;
  > ${Heading} {
    text-align: center;
    color: #333;
    width: 100%;
    margin-bottom: 4rem;
  }
  ${PricingContainer} {
    max-width: 500px;
    margin: unset;
    margin-bottom: 2rem;
    width: 100%;
    font-family: "Open Sans", sans-serif;
    padding: unset;
    :nth-child(2) {
      border: 3px solid rgb(255, 98, 0);
      box-shadow: unset;
    }
  }

  ${Heading} {
    font-size: 2rem;
    font-weight: normal;
  }

  ${Text} {
    color: rgb(255, 98, 0);
    font-size: 2.5rem;
    max-width: 400px;
    width: 100%;
  }

  ${Span} {
    font-style: unset;
    + p {
      padding-bottom: unset;
    }
  }
`;
const CardsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
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
