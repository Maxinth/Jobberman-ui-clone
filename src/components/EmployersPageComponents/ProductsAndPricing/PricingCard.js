import PricesDetails from "./PricesDetails";
import PricingTop from "./PricingTop";
import { PriceCardContainer } from "./styled";
import React from "react";

const PricingCard = (props) => {
  const { details, btnText, goTo, index, ...pricingTopProps } = props;

  return (
    <PriceCardContainer>
      <PricingTop {...pricingTopProps} index={index} />
      <PricesDetails
        data={details}
        btnText={btnText}
        goTo={goTo}
        index={index}
      />
    </PriceCardContainer>
  );
};

export default PricingCard;
