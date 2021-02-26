import React from "react";
import SmallBanner from "./SmallBanner";
import HomeBanner from "./HomeBanner";
import { MainBannerContainer } from "./banner.elements";

const MainBanner = () => {
  return (
    <MainBannerContainer>
      <SmallBanner />
      <HomeBanner />
    </MainBannerContainer>
  );
};

export default MainBanner;
