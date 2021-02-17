import { SocialIconsContainer, IconContainer } from "./styled";
import { iconsData } from "./linksData";
import React from "react";

const FooterSocialIcons = () => {
  return (
    <SocialIconsContainer>
      {iconsData.map((item) => {
        const { icon, id, color } = item;
        return (
          <IconContainer key={id} color={color}>
            {icon}
          </IconContainer>
        );
      })}
    </SocialIconsContainer>
  );
};

export default FooterSocialIcons;
