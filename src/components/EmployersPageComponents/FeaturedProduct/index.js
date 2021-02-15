import {
  HowTosContainer,
  Heading,
  Text,
} from "../../StandOut/standOutElements";
import { ConnectBox as ProductBox } from "../../Connect/styled";
import styled from "styled-components";
import Assessments from "./Assessments";
import OfferSection from "./OfferSection";
import AssessJobSeekers from "./AssessJobSeekers";
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
    max-width: 600px;
    box-shadow: unset;
    transition: all 0.2s;
    h4 {
      font-size: 1.7rem;
    }
    p + p {
      margin-top: 3rem;
    }
    @media (min-width: 1024px) {
      max-width: 900px;
      > * {
        text-align: left !important;
      }
    }
  }

  ${Text} {
    max-width: 600px;
    line-height: 1.8;
  }
`;

const MainContainer = styled.section`
  @media (min-width: 1024px) {
    display: flex;
    width: 100%;
    justify-content: center;

    > * {
      margin: unset;
    }
  }
`;

const FeaturedProducts = () => {
  return (
    <FeaturedContainer>
      <Heading>Featured Product</Heading>
      <MainContainer>
        <ProductBox>
          <OfferSection />
          <Assessments />
        </ProductBox>
        <AssessJobSeekers />
      </MainContainer>
    </FeaturedContainer>
  );
};

export default FeaturedProducts;
