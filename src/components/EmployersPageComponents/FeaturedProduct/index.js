import { MainContainer, FeaturedContainer, Heading } from "./styled";
import AssessmentsSections from "./AssessmentsSection";

const FeaturedProducts = () => {
  return (
    <FeaturedContainer>
      <Heading>Featured Product</Heading>
      <MainContainer>
        <AssessmentsSections />
      </MainContainer>
    </FeaturedContainer>
  );
};

export default FeaturedProducts;
