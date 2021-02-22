import { PlayStoreImg, FooterSocialContainer } from "./styled";
import FooterSocialIcons from "./FooterSocialIcons";
import googlePlay from "../../assets/playStore.png";
import React from "react";
import { iconsData } from "./linksData";

const FooterSocial = () => {
  return (
    <FooterSocialContainer>
      <FooterSocialIcons data={iconsData} />
      <PlayStoreImg src={googlePlay} alt="play store" />
    </FooterSocialContainer>
  );
};

export default FooterSocial;
