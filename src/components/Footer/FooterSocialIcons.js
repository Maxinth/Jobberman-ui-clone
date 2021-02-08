import styled from "styled-components";
import { iconsData } from "./linksData";

const SocialIconsContainer = styled.section`
  display: flex;
  margin-top: 2rem;
`;
const IconContainer = styled.span`
  background-color: #fff;
  border-radius: 50px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.2rem;
  padding: 0.3rem;
  color: ${({ color }) => color};
  > svg {
    font-size: 2rem;
    color: inherit;
  }
`;
// styled.``;
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
