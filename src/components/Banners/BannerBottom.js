import React from "react";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Heading,
  VideoContainer,
  BannerVideo,
  BannerBtn,
} from "./banner.elements";

const Container = styled.section`
  text-align: center;
  transition: padding-left 0.3s;
  @media (min-width: 642px) {
    text-align: left;
    max-width: 500px;
    padding-left: 3rem;
  }

  @media (min-width: 900px) {
    padding-left: 5rem;
  }
`;

const Text = styled.span`
  text-transform: capitalize;
`;

const BannerBottom = () => {
  return (
    <Container>
      <Heading>
        We will boost your skills and profile, provide you with personalised
        career guidance and match you with the right opportunities, so that you
        can be the Best and the Brightest.
      </Heading>
      <VideoContainer>
        <BannerVideo>
          <PlayCircleOutlineOutlinedIcon
          // className="mainBanner__videoIcon"
          />
          <Text>Watch the Video</Text>
        </BannerVideo>
        <BannerBtn>
          <Link to="/sign-up">Join Now!</Link>
        </BannerBtn>
      </VideoContainer>
    </Container>
  );
};

export default BannerBottom;
