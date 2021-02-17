import styled from "styled-components";
import { VideoContainer, BannerVideo, BannerBtn } from "./banner.elements";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import { Link, useLocation } from "react-router-dom";
import { renderByLocation } from "./bannerData";
import React from "react";

const Text = styled.span`
  text-transform: capitalize;
`;

const MockVideoSection = () => {
  const location = useLocation();
  return (
    <VideoContainer>
      <BannerVideo>
        <PlayCircleOutlineOutlinedIcon />
        <Text>Watch the Video</Text>
      </BannerVideo>
      <BannerBtn>
        <Link to="/sign-up">{renderByLocation(location)}</Link>
      </BannerBtn>
    </VideoContainer>
  );
};

export default MockVideoSection;
