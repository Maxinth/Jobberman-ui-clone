import styled from "styled-components";
import {
  ProductBox as PricingContainer,
  Heading,
  Text,
  Span,
} from "../FeaturedProduct/styled";
import { HelpContainer } from "../HelpSection/styled";
import { ProductBox } from "../FeaturedProduct/styled";
// GeneratePriceTexts
const PriceText = styled.p`
  padding: 1rem 2rem;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  color: rgb(78, 85, 89);
  font-size: 1.1rem;
`;

// index.js
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
    margin-bottom: 4rem;
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
    /* font-weight: normal; */
  }

  ${Text} {
    color: rgb(255, 98, 0);
    font-size: 2.5rem;
    max-width: 400px;
    width: 100%;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
  }

  ${Span} {
    font-style: unset;
    font-weight: 400;
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
  @media (min-width: 1200px) {
    padding: 1rem 2rem;
  }
`;

// PriceDetails
const ListContainer = styled.ul`
  width: 100%;
  padding: 1rem 2rem;

  svg {
    font-size: 1.5rem;
  }
  li {
    margin-bottom: 1rem;
  }
  span {
    margin-left: 0.5rem;
  }
  button {
    margin-top: 2rem;
    width: 100%;
    a {
      font-size: 1.2rem;
    }
  }
`;

const ItemsContainer = styled.section`
  background-color: rgb(249, 250, 251);
  width: 100%;
  display: flex;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > svg {
    transform: translateY(-12px);
    font-size: 2rem;
    color: grey;
  }
`;

// PricingCard
const PriceCardContainer = styled(ProductBox)`
  :nth-child(2) > p:first-child {
    background-color: rgb(255, 98, 0);
    color: #fff;
    width: 150px;
    border-radius: 25px;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bolder;
    transform: translateY(-15px);
  }
`;

export {
  PriceText,
  Container,
  Heading,
  CardsContainer,
  ListContainer,
  ItemsContainer,
  PriceCardContainer,
};
