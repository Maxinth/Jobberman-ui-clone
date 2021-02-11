import React from "react";
import styled from "styled-components";
import { Title } from "../styled";
import testImg from "../../../assets/profiles/seeker-notifications.png";
const ProfileContainer = styled.section`
  ${Title} {
    line-height: 1.7;
    font-weight: 600;
  }
`;

const Text = styled.p`
  color: rgb(78, 85, 89);
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  text-align: center;
  line-height: 1.7;
`;
// styled.``;

const ProfileBox = styled.div``;
const Profile = () => {
  return (
    <ProfileContainer>
      <Title>
        Complete your profile and match better with the right employers.
      </Title>
      <Text>
        As you complete your profile, we will unlock features that improve your
        chances of getting the right job
      </Text>
      <ProfileBox></ProfileBox>
    </ProfileContainer>
  );
};

export default Profile;
