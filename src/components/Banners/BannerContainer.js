import React from "react";
import { MainBannerImg, MainContainer } from "./banner.elements";
import PropTypes from "prop-types";
import BannerBottom from "./BannerBottom";

const BannerContainer = ({ lgImg = "", smImg = "", mainText = "" }) => {
  return (
    <MainContainer>
      {/* show on small screens */}
      {/* <MainBannerImg src={checkAndUse(smallScreenImg, smImg)} alt="banner" /> */}
      <MainBannerImg src={smImg} alt="banner" />
      {/* show on small screens */}
      <MainBannerImg src={lgImg} alt="banner" lg={true} />
      <BannerBottom mainHeading={mainText} />
    </MainContainer>
  );
};

BannerContainer.propTypes = {
  lgImg: PropTypes.string,
  smImg: PropTypes.string,
  mainText: PropTypes.string,
};

export default BannerContainer;
