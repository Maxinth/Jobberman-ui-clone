import React from "react";
import {
  mainHeading,
  smallScreenImg,
  largerScreenImg,
  checkAndUse,
} from "./bannerData";
import styled from "styled-components";
import { MainBannerImg } from "./banner.elements";

import BannerBottom from "./BannerBottom";

const MainBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const BannerContainer = ({ lgImg, smImg, mainText }) => {
  return (
    <MainBannerContainer>
      {/* show on small screens */}
      <MainBannerImg src={checkAndUse(smallScreenImg, smImg)} alt="banner" />
      {/* show on small screens */}
      <MainBannerImg
        src={checkAndUse(largerScreenImg, lgImg)}
        alt="banner"
        lg={true}
      />
      <BannerBottom mainHeading={checkAndUse(mainHeading, mainText)} />
    </MainBannerContainer>
  );
};

export default BannerContainer;
