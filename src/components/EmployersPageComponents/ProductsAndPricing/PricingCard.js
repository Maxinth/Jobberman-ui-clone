import PricesDetails from "./PricesDetails";

import PricingTop from "./PricingTop";
import { ProductBox as PricingContainer } from "../FeaturedProduct/styled";

const PricingCard = (props) => {
  const { details, btnText, goTo, ...pricingTopProps } = props;

  return (
    <PricingContainer>
      <PricingTop {...pricingTopProps} />
      <PricesDetails data={details} btnText={btnText} goTo={goTo} />
    </PricingContainer>
  );
};

export default PricingCard;
