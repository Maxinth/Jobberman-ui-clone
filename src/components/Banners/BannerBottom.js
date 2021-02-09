import React from "react";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Heading,
  VideoContainer,
  BannerVideo,
  BannerBtn,
  Container,
} from "./banner.elements";

const Text = styled.span`
  text-transform: capitalize;
`;

const BannerBottom = () => {
  return (
    <Container>
      <Heading as="h1" bg>
        Get the Right Job Vacancies & Careers in Nigeria{" "}
      </Heading>
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
