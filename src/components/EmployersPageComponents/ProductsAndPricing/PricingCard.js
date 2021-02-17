import PricesDetails from "./PricesDetails";
import styled from "styled-components";
import PricingTop from "./PricingTop";
import { ProductBox } from "../FeaturedProduct/styled";

const PricingContainer = styled(ProductBox)`
  :nth-child(2) > p:first-child {
    background-color: rgb(255, 98, 0);
    color: #fff;
    width: 150px;
    border-radius: 25px;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bolder;
    transform: translateY(-15px);
  }
`;

const PricingCard = (props) => {
  const { details, btnText, goTo, index, ...pricingTopProps } = props;

  return (
    <PricingContainer>
      <PricingTop {...pricingTopProps} index={index} />
      <PricesDetails
        data={details}
        btnText={btnText}
        goTo={goTo}
        index={index}
      />
    </PricingContainer>
  );
};

export default PricingCard;
