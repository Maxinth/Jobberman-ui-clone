import { pricingData } from "./data";
import PricingCard from "./PricingCard";

const GeneratePriceCards = () => {
  return (
    <>
      {pricingData.map((item, index) => (
        <PricingCard key={index} {...item} index={index}/>
      ))}
    </>
  );
};

export default GeneratePriceCards;
