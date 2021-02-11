import MainBannerSection from "../Banners/MainBannerSection";
import { JobSeekerContainer } from "./styled";
import WhyJobberMan from "./WhyJobberMan";
import Profiles from "./Profiles/Profiles";
import Connect from "../Connect/Connect";
const JobSeekers = () => {
  return (
    <JobSeekerContainer>
      <MainBannerSection />
      <WhyJobberMan />
      <Profiles />
      <Connect />
    </JobSeekerContainer>
  );
};

export default JobSeekers;
