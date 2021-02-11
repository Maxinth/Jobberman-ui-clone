import MainBannerSection from "../Banners/MainBannerSection";
import { JobSeekerContainer } from "./styled";
import WhyJobberMan from "./WhyJobberMan";
import Profiles from "./Profiles";
const JobSeekers = () => {
  return (
    <JobSeekerContainer>
      <MainBannerSection />
      <WhyJobberMan />
      <Profiles />
    </JobSeekerContainer>
  );
};

export default JobSeekers;
