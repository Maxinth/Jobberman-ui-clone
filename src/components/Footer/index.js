import styled from "styled-components";

import FooterLinks from "./FooterLinks";
const Container = styled.footer`
  background-color: rgb(0, 0, 0);
  padding: 1rem 2rem;
`;

const FooterLinksContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`;

// styled.``
const Footer = () => {
  return (
    <Container>
      <FooterLinksContainer>
        <FooterLinks />
      </FooterLinksContainer>
    </Container>
  );
};

export default Footer;
