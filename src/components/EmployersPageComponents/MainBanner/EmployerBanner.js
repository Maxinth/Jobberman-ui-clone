import React from "react";
import { EmployersContainer } from "./styled";
import MainBannerSection from "../../Banners/MainBannerSection";
import { largerScreenImg, smallScreenImg, mainHeading } from "./data";

const EmployerBanner = () => {
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

export default EmployerBanner;
