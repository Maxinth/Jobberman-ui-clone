import styled from "styled-components";
import FooterSocialIcons from "./FooterSocialIcons";
import googlePlay from "../../assets/strategicOut.webp";
const PlayStoreImg = styled.img`
  /* object-fit: contain; */
  display: block;
  margin-top: 1rem;
  transition: margin 0.2;
  @media (min-width: 500px) {
    margin-left: 1rem;
    margin-top: unset;
  }
`;
const FooterSocialContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex: 1;
  transition: all 0.2s;
  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
const FooterSocial = () => {
  return (
    <FooterSocialContainer>
      <FooterSocialIcons />
      <PlayStoreImg src={googlePlay} alt="play store" />
    </FooterSocialContainer>
  );
};

export default FooterSocial;
