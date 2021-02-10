import MainBannerSection from "../Banners/MainBannerSection";
import { JobSeekerContainer } from "./styled";
import WhyJobberMan from "./WhyJobberMan";

const JobSeekers = () => {
  return (
    <JobSeekerContainer>
      <MainBannerSection />
      <WhyJobberMan />
    </JobSeekerContainer>
  );
};

export default JobSeekers;
