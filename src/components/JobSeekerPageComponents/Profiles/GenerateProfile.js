import Profile from "./Profile";
import { data } from "./data";
import React from "react";

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
