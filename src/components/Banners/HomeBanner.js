import React from "react";
import MainBannerSection from "./MainBannerSection";
import { mainHeading, smallScreenImg, largerScreenImg } from "./bannerData";
import DropChildFromTop from "../DropFromTop";

const HomeBanner = () => {
  return (
    <DropChildFromTop>
      <MainBannerSection
        lgImg={largerScreenImg}
        smImg={smallScreenImg}
        mainText={mainHeading}
      />
    </DropChildFromTop>
  );
};

export default HomeBanner;
