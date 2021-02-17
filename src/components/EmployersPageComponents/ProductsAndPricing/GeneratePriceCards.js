import { pricingData } from "./data";
import PricingCard from "./PricingCard";
import React from "react";

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
