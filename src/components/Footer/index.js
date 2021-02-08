import styled from "styled-components";

import FooterLinks from "./FooterLinks";
import FooterSocialIcons from "./FooterSocialIcons";
const FooterContainer = styled.footer`
  background-color: rgb(0, 0, 0);
  padding: 1rem 2rem;
`;

const FooterLinksContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`;

const Container = styled.div``;

// styled.``
const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinks />
        <Container>
          <FooterSocialIcons />
        </Container>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
