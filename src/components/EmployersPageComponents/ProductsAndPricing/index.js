import {
  ProductBox as PricingContainer,
  Heading,
  Text,
  Span,
} from "../FeaturedProduct/styled";
import { HelpContainer } from "../HelpSection/styled";
import styled from "styled-components";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";

const Container = styled(HelpContainer)`
  /* margin: unset; */
  ${PricingContainer} {
    max-width: 600px;
    margin: unset;
    width: 100%;
    font-family: "Open Sans", sans-serif;
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
  }
`;

const PriceText = styled.p``;
const ItemsContainer = styled.section`
  background-color: rgb(249, 250, 251);
`;
const ProductsAndPricing = () => {
  return (
    <Container>
      <PricingContainer>
        <Heading>Best Match</Heading>
        <Text>NGN 52,000</Text>
        <Span>Including VAT</Span>
        <PriceText> Hire the right fit, faster!</PriceText>

        <PriceText>
          Our HR Experts & Technology match you with the best Candidates.{" "}
        </PriceText>
        <ItemsContainer>
          <InfoRoundedIcon />
          gwewe
        </ItemsContainer>
      </PricingContainer>
    </Container>
  );
};

export default ProductsAndPricing;
