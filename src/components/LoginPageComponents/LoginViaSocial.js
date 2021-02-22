import React from "react";
import GenerateSocialIcons from "../Footer/FooterSocialIcons";
import { iconsData } from "./data";
import { IconsBox } from "./styled";

const LoginViaSocial = () => {
  return (
    <IconsBox>
      <GenerateSocialIcons data={iconsData} />
    </IconsBox>
  );
};

export default LoginViaSocial;
