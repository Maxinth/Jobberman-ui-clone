import { Heading, Text, Span } from "../FeaturedProduct/styled";
import GeneratePriceTexts from "./GeneratePriceTexts";
import PropTypes from "prop-types";

const PricingTop = ({ heading, coloredText, spanText, texts = [] }) => {
  return (
    <>
      <Heading>{heading}</Heading>
      <Text>{coloredText}</Text>
      {spanText && <Span>{spanText}</Span>}
      <GeneratePriceTexts data={texts} />
    </>
  );
};

PricingTop.propTypes = {
  heading: PropTypes.string,
  coloredText: PropTypes.string,
  spanText: PropTypes.string,
  text: PropTypes.array,
};

export default PricingTop;
