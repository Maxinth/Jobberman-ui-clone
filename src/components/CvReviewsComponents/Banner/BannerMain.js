import React from "react";
import { HeroContainer } from "./styled";
import BannerContents from "./BannerContents";
import DropChildFromTop from "../../DropFromTop";

const BannerMain = () => {
  return (
    <DropChildFromTop>
      <HeroContainer>
        <BannerContents />
      </HeroContainer>
    </DropChildFromTop>
  );
};

export default BannerMain;
