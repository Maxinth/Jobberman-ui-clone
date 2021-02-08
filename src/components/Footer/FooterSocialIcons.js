import styled from "styled-components";
import { iconsData } from "./linksData";

const SocialIconsContainer = styled.section`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  transition: margin.2s;

  @media (min-width: 500px) {
    margin-top: unset;
  }
  @media (min-width: 768px) {
    margin-right: 2rem;
  }
`;
const IconContainer = styled.div`
  background-color: #fff;
  border-radius: 100px;
  /* flex: 1; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.2rem;
  padding: 1rem;
  height: 40px;
  width: 40px;
  color: ${({ color }) => color};
  > svg {
    font-size: 2.5rem;
    color: inherit;
    padding: 0.3rem;
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
