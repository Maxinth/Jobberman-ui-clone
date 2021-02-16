import {
  ProductBox as PricingContainer,
  Heading,
  Text,
  Span,
} from "../FeaturedProduct/styled";
import { HelpContainer } from "../HelpSection/styled";
import styled from "styled-components";

import PricingCard from "./PricingCard";

const Container = styled(HelpContainer)`
  font-family: "Roboto", sans-serif;
  flex-direction: column;
  > ${Heading} {
    text-align: center;
    color: #333;
    width: 100%;
    margin-bottom: 2rem;
  }
  ${PricingContainer} {
    max-width: 600px;
    margin: unset;
    width: 100%;
    font-family: "Open Sans", sans-serif;
    padding: unset;
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
const CardsContainer = styled.section``;
const ProductsAndPricing = () => {
  return (
    <Container>
      <Heading>Products & Pricing </Heading>
      <CardsContainer>
        <PricingCard />
      </CardsContainer>
    </Container>
  );
};

export default ProductsAndPricing;
