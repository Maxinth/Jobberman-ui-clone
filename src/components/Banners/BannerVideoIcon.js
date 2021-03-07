import React from "react";
import { BannerVideo } from "./banner.elements";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import { VideoText } from "./banner.elements";

const BannerVideoIcon = () => {
  return (
    <BannerVideo>
      <PlayCircleOutlineOutlinedIcon />
      <VideoText>Watch the Video</VideoText>
    </BannerVideo>
  );
};

export default BannerVideoIcon;
