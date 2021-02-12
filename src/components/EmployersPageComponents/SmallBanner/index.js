import {
  EmployerSmallBanner,
  Span,
  LearnMoreLink,
  SmallBannerContainer,
  Text,
} from "./styled";

const SmallBanner = () => {
  return (
    <EmployerSmallBanner>
      <SmallBannerContainer>
        <Text>
          Test for the <Span>Best!</Span> Add a Skills Assessment to your job
          listing and discover who has the right skills to do the job! Get 10%
          OFF<LearnMoreLink to="/skills-assessments"> learn more</LearnMoreLink>
          #TestForTheBest
        </Text>
      </SmallBannerContainer>
    </EmployerSmallBanner>
  );
};

export default SmallBanner;
