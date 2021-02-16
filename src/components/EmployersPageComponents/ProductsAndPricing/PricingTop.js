import { Heading, Text, Span } from "../FeaturedProduct/styled";
import styled from "styled-components";

const PriceText = styled.p`
  padding: 1rem 2rem;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  color: rgb(78, 85, 89);
  font-size: 1.1rem;
`;
const PricingTop = () => {
  return (
    <>
      <Heading>Best Match</Heading>
      <Text>NGN 52,000</Text>
      <Span>Including VAT</Span>
      <PriceText> Hire the right fit, faster!</PriceText>

      <PriceText>
        Our HR Experts & Technology match you with the best Candidates.
      </PriceText>
    </>
  );
};

export default PricingTop;
