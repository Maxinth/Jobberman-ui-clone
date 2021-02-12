import { PlayStoreImg, FooterSocialContainer } from "./styled";
import FooterSocialIcons from "./FooterSocialIcons";
import googlePlay from "../../assets/playStore.png";

const FooterSocial = () => {
  return (
    <FooterSocialContainer>
      <FooterSocialIcons />
      <PlayStoreImg src={googlePlay} alt="play store" />
    </FooterSocialContainer>
  );
};

export default FooterSocial;