import React from "react";
import Advertise from "./Advertise";
import EmployersMainBanner from "./MainBanner";
import SmallBanner from "./SmallBanner";

const EmployersPage = () => {
  return (
    <>
      <SmallBanner />
      <EmployersMainBanner />
      <Advertise />
    </>
  );
};

export default EmployersPage;
