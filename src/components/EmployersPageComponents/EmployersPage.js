import React from "react";
import Advertise from "./Advertise";
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
    </>
  );
};

export default EmployersPage;
