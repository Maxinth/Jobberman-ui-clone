import React from "react";
import { ProfileContainer, Container } from "./styled";
import TopHeading from "./TopHeading";
import GenerateProfile from "./GenerateProfile";

const Profiles = () => {
  return (
    <ProfileContainer>
      <TopHeading />
      <Container>
        <GenerateProfile />
      </Container>
    </ProfileContainer>
  );
};

export default Profiles;
