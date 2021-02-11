import MainBannerSection from "../Banners/MainBannerSection";
import { JobSeekerContainer } from "./styled";
import WhyJobberMan from "./WhyJobberMan";
import Profiles from "./Profiles/Profiles";
import Connect from "../Connect/Connect";
import GetStarted from "./GetStarted/GetStarted";
import NewsLetter from "../JobFunctions/NewsLetter/NewsLetter";

const JobSeekersSection = () => {
  return (
    <JobSeekerContainer>
      <MainBannerSection />
      <WhyJobberMan />
      <Profiles />
      <GetStarted />
      <Connect />
      <NewsLetter />
    </JobSeekerContainer>
  );
};

export default JobSeekersSection;
