import { Heading, Text, Span } from "../FeaturedProduct/styled";
import GeneratePriceTexts from "./GeneratePriceTexts";
import PropTypes from "prop-types";

const PricingTop = ({ heading, coloredText, spanText, texts = [], index }) => {
  return (
    <>
      {index === 1 && <Text>Most Popular</Text>} {/* see comments */}
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
  index: PropTypes.number,
};

export default PricingTop;

/*
  {index === 1 && <Text>Most Popular</Text>} is rendered only for the second item .
*/
