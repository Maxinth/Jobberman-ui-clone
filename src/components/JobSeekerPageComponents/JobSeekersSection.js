import MainBannerSection from "../Banners/MainBannerSection";
import { JobSeekerContainer } from "./styled";
import WhyJobberMan from "./WhyJobberMan";
import Profiles from "./Profiles/Profiles";
import Connect from "../Connect/Connect";
import GetStarted from "./GetStarted/GetStarted";
import NewsLetter from "../JobFunctions/NewsLetter/NewsLetter";
import {
  mainHeading,
  smallScreenImg,
  largerScreenImg,
} from "../Banners/bannerData";
const JobSeekersSection = () => {
  return (
    <JobSeekerContainer>
      <MainBannerSection
        lgImg={largerScreenImg}
        smImg={smallScreenImg}
        mainText={mainHeading}
      />
      <WhyJobberMan />
      <Profiles />
      <GetStarted />
      <Connect />
      <NewsLetter />
    </JobSeekerContainer>
  );
};

export default JobSeekersSection;
