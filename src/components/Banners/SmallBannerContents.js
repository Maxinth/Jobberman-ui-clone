import React from "react";
import { SmallBannerContainer, Text, BannerLink } from "./banner.elements";

const SmallBannerContents = () => {
  return (
    <SmallBannerContainer>
      <Text>Seize Your Next Opportunity!</Text>
      <Text>Top companies on Jobberman are looking for you</Text>
      <BannerLink to="/">Get Started Today</BannerLink>
    </SmallBannerContainer>
  );
};

export default SmallBannerContents;
