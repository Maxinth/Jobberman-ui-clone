import React from "react";
import SmallBanner from "./SmallBanner";
import MainBannerSection from "./MainBannerSection";
import { mainHeading, smallScreenImg, largerScreenImg } from "./bannerData";
import { MainBannerContainer } from "./banner.elements";

const MainBanner = () => {
  return (
    <MainBannerContainer>
      <SmallBanner />
      <MainBannerSection
        lgImg={largerScreenImg}
        smImg={smallScreenImg}
        mainText={mainHeading}
      />
    </MainBannerContainer>
  );
};

export default MainBanner;
