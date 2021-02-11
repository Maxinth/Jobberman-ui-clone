import styled from "styled-components";

import PropTypes from "prop-types";

const ProfileBox = styled.div`
  margin-bottom: 4rem;
`;
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
const Profile = ({ img, detail, heading }) => {
  return (
    <ProfileBox>
      <ProfileImage src={img} alt="test pic" />
      <ProfileDetails>
        <Heading>{heading}</Heading>
        <Text>{detail}</Text>
      </ProfileDetails>
    </ProfileBox>
  );
};

Profile.propTypes = {
  img: PropTypes.string,
  heading: PropTypes.string,
  detail: PropTypes.string,
};

export default Profile;
