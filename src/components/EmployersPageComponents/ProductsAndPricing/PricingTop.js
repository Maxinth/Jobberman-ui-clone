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
const PricingTop = ({ heading, coloredText, spanText, texts = [] }) => {
  return (
    <>
      <Heading>{heading}</Heading>
      <Text>{coloredText}</Text>
      <Span>{spanText}</Span>
      {texts.map((item, index) => (
        <PriceText key={index}>{item}</PriceText>
      ))}
    </>
  );
};

export default PricingTop;
