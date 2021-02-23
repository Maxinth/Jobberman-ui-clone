import React from "react";
import { HeroContainer, HeroBox } from "./styled";
import BannerHeadings from "./BannerHeadings";

const BannerMain = () => {
  return (
    <HeroContainer>
      <HeroBox>
        <BannerHeadings />
      </HeroBox>
    </HeroContainer>
  );
};

export default BannerMain;
