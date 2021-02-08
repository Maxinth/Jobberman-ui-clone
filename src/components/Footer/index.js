import styled from "styled-components";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";

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

const Container = styled.section`
  width: 100%;
  margin-top: 1rem;
  transition: margin-top 0.2s;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 2rem;
  }
`;

const CopyRight = styled.p`
  color: #fff;
  margin: 1rem 0;
  font-family: "Open Sans", sans-serif;
  font-size: 0.9rem;
  text-align: center;
`;

// styled.``
const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinks />
        <Container>
          <FooterSocial />
          <CopyRight> &copy; Jobberman 2021. All rights reserved. </CopyRight>
        </Container>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
