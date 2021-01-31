import React from "react";
import bannerImg from "../../assets/jobseeker-hero-bold.png";
import bannerImg2 from "../../assets/jobseeker-hero2.png";
import styled from "styled-components";
import { MainBannerImg } from "./banner.elements";

import BannerBottom from "./BannerBottom";

const MainBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const BannerContainer = () => {
  return (
    <MainBannerContainer>
      {/* show on small screens */}
      <MainBannerImg src={bannerImg} alt="banner" />
      {/* show on small screens */}
      <MainBannerImg src={bannerImg2} alt="banner" lg={true} />
      <BannerBottom />
    </MainBannerContainer>
  );
};

export default BannerContainer;
