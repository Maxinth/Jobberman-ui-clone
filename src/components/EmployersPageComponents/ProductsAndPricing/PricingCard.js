import PricesDetails from "./PricesDetails";
import { bestMatch } from "./data";
import PricingTop from "./PricingTop";
import { ProductBox as PricingContainer } from "../FeaturedProduct/styled";

const PricingCard = () => {
  return (
    <PricingContainer>
      <PricingTop />
      <PricesDetails data={bestMatch} />
    </PricingContainer>
  );
};

export default PricingCard;
