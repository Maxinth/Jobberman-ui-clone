import { EmployersContainer } from "./styled";
import MainBannerSection from "../../Banners/MainBannerSection";
import { largerScreenImg, smallScreenImg, mainHeading } from "./data";

const EmployersMainBanner = () => {
  return (
    <EmployersContainer>
      <MainBannerSection
        lgImg={largerScreenImg}
        smImg={smallScreenImg}
        mainText={mainHeading}
      />
    </EmployersContainer>
  );
};

export default EmployersMainBanner;
