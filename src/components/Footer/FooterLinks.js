import { FooterLink, LinksContainer } from "./styled";
import { linksData } from "./linksData";

const FooterLinks = () => {
  return (
    <LinksContainer>
      {linksData.map((item) => {
        const { goTo, linkText } = item;
        return (
          <FooterLink to={`/${goTo}`} key={goTo}>
            {linkText}
          </FooterLink>
        );
      })}
    </LinksContainer>
  );
};

export default FooterLinks;
