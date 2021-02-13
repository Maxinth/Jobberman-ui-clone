import {
  HowTosContainer,
  Heading,
  Text,
} from "../../StandOut/standOutElements";
import { ConnectBox as ProductBox } from "../../Connect/styled";
import styled from "styled-components";
import Assessments from "./Assessments";
import OfferSection from "./OfferSection";
const FeaturedContainer = styled(HowTosContainer)`
  display: block;
  background-color: rgb(250, 250, 250);
  padding: 1rem 2rem;
  ${Heading} {
    text-align: center;
    margin: 2rem 0;
  }

  ${ProductBox} {
    padding: 1rem 2rem;
    max-width: 900px;
    h4 {
      font-size: 1.7rem;
    }
    p + p {
      margin-top: 3rem;
    }
  }

  ${Text} {
    max-width: 600px;
    line-height: 1.8;
    font-size: 1.2rem;
    /* text-align: left; */
  }
`;

const FeaturedProducts = () => {
  return (
    <FeaturedContainer>
      <Heading>Featured Product</Heading>
      <ProductBox>
        <OfferSection />
        <Assessments />
      </ProductBox>
    </FeaturedContainer>
  );
};

export default FeaturedProducts;
