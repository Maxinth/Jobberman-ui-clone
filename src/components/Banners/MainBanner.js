import React from "react";
import SmallBanner from "./SmallBanner";
import "./mainBanner.css";
import MainBannerSection from "./MainBannerSection";

const MainBanner = () => {
  return (
    <section className="mainBanner">
      <SmallBanner />
      <MainBannerSection />
    </section>
  );
};

export default MainBanner;
