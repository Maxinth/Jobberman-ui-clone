import MainBannerSection from "../Banners/MainBannerSection";
import { JobSeekerContainer } from "./styled";
import WhyJobberMan from "./WhyJobberMan";
import Profile from "./Profile";
const JobSeekers = () => {
  return (
    <JobSeekerContainer>
      <MainBannerSection />
      <WhyJobberMan />
      <Profile />
    </JobSeekerContainer>
  );
};

export default JobSeekers;
