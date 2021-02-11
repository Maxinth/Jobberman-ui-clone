import Profile from "./Profile";
import { data } from "./data";

const GenerateProfile = () => {
  return (
    <>
      {data.map((item, index) => (
        <Profile key={index} {...item} />
      ))}
    </>
  );
};

export default GenerateProfile;
