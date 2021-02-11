import {
  ProfileDetails,
  ProfileBox,
  ProfileImage,
  Heading,
  Text,
} from "./styled";

import PropTypes from "prop-types";

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
