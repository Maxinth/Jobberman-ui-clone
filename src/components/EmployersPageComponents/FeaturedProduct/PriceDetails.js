import GenerateTexts from "./GenerateTexts";
import { pricingTexts } from "./categoryData";
import CTA from "../../CTA";
import { Span } from "./styled";

const PriceDetails = () => {
  return (
    <>
      <GenerateTexts data={pricingTexts} />
      <Span>(Save 10%)</Span>
      <CTA text="find out more" goTo="/skills-assessment" />
    </>
  );
};

export default PriceDetails;
