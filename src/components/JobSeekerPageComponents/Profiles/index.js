import React from "react";
import styled from "styled-components";
import { Title } from "../styled";
import testImg from "../../../assets/profiles/seeker-notifications.png";
import TopHeading from "./TopHeading";
import Profile from "./Profile";
const ProfileContainer = styled.section`
  padding: 1rem 2rem;
  ${Title} {
    line-height: 1.7;
    font-weight: 600;
  }
`;

// styled.``;

const Container = styled.section``;
const Profiles = () => {
  return (
    <ProfileContainer>
      <TopHeading />
      <Container>
        <Profile />
      </Container>
    </ProfileContainer>
  );
};

export default Profiles;
