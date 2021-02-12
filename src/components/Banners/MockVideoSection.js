import styled from "styled-components";
import { VideoContainer, BannerVideo, BannerBtn } from "./banner.elements";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import { Link } from "react-router-dom";

const Text = styled.span`
  text-transform: capitalize;
`;

const MockVideoSection = () => {
  return (
    <VideoContainer>
      <BannerVideo>
        <PlayCircleOutlineOutlinedIcon />
        <Text>Watch the Video</Text>
      </BannerVideo>
      <BannerBtn>
        <Link to="/sign-up">Join Now!</Link>
      </BannerBtn>
    </VideoContainer>
  );
};

export default MockVideoSection;
