import styled from "styled-components";
import testImg from "../../../assets/profiles/seeker-notifications.png";
const ProfileBox = styled.div``;
const ProfileImage = styled.img`
  display: block;
  width: 100%;
  object-fit: contain;
`;

const ProfileDetails = styled.section`
  text-align: center;
  color: rgb(78, 85, 89);
  font-family: "Roboto", sans-serif;
`;
const Heading = styled.h5`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const Text = styled.p`
  color: rgb(78, 85, 89);
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  text-align: center;
  line-height: 1.7;
`;
const Profile = () => {
  return (
    <ProfileBox>
      <ProfileImage src={testImg} alt="test pic" />
      <ProfileDetails>
        <Heading>Boosted Job Application</Heading>
        <Text>
          Your job application will be highlighted and your Career Profile will
          be recommended to employers whenever they post a job relevant to your
          skills.
        </Text>
      </ProfileDetails>
    </ProfileBox>
  );
};

export default Profile;
