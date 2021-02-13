import React from "react";
import Advertise from "./Advertise";
import FeaturedProducts from "./FeaturedProduct";
import HelpSection from "./HelpSection";
import EmployersMainBanner from "./MainBanner";
import SmallBanner from "./SmallBanner";

const EmployersPage = () => {
  return (
    <>
      <SmallBanner />
      <EmployersMainBanner />
      <Advertise />
      <HelpSection />
      <FeaturedProducts />
    </>
  );
};

export default EmployersPage;
