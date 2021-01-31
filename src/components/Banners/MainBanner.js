import React from "react";
import SmallBanner from "./SmallBanner";
import "./mainBanner.css";
import MainBannerSection from "./MainBannerSection";
import { MainBannerContainer } from "./banner.elements";

const MainBanner = () => {
  return (
    <MainBannerContainer>
      <SmallBanner />
      <MainBannerSection />
    </MainBannerContainer>
  );
};

export default MainBanner;
