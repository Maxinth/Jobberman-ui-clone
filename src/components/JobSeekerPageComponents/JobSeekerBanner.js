import React from "react";
import MainBannerSection from "../Banners/MainBannerSection";
import {
  mainHeading,
  smallScreenImg,
  largerScreenImg,
} from "../Banners/bannerData";
import DropChildFromTop from "../DropFromTop";

const JobSeekerBanner = () => {
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

export default JobSeekerBanner;
