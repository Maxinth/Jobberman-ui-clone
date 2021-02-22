import { SocialIconsContainer, IconContainer } from "./styled";
import React from "react";
import PropTypes from "prop-types";

const FooterSocialIcons = ({ data }) => {
  return (
    <SocialIconsContainer>
      {data.map((item) => {
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

FooterSocialIcons.propTypes = {
  data: PropTypes.array,
};
export default FooterSocialIcons;
