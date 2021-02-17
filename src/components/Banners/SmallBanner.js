import React from "react";
import {
  SmallBannerBox,
  SmallBannerContainer,
  Text,
  BannerLink,
} from "./banner.elements";
const SmallBanner = () => {
  return (
    <SmallBannerBox>
      <SmallBannerContainer>
        <Text>Seize Your Next Opportunity!</Text>
        <Text>Top companies on Jobberman are looking for you</Text>
        <BannerLink to="/">Get Started Today</BannerLink>
      </SmallBannerContainer>
    </SmallBannerBox>
  );
};

export default SmallBanner;
