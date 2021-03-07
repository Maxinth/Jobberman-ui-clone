import { VideoContainer, BannerBtn } from "./banner.elements";
import { Link, useLocation } from "react-router-dom";
import { renderByLocation } from "./bannerData";
import React from "react";
import BannerVideoIcon from "./BannerVideoIcon";

const MockVideoSection = () => {
  const location = useLocation();
  return (
    <VideoContainer>
      <BannerVideoIcon />
      <BannerBtn>
        <Link to="/sign-up">{renderByLocation(location)}</Link>
      </BannerBtn>
    </VideoContainer>
  );
};

export default MockVideoSection;
