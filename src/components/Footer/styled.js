import { Link } from "react-router-dom";
import styled from "styled-components";

// Footer/index

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

// FooterLinks
const FooterLink = styled(Link)`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  display: block;
  margin: 0.4rem 0;
  margin-bottom: 0.8rem;
  transition: all 0.2s;
  font-size: 0.9rem;
  font-weight: 600;

  :hover {
    color: rgb(255, 98, 0);
  }

  @media (min-width: 768px) {
    min-width: 100px;
    display: inline;
    margin-bottom: unset;
    text-align: center;
  }
  @media (min-width: 900px) {
    min-width: 200px;
  }
`;

const LinksContainer = styled.div`
  text-align: center;
  max-width: 1200px;
  padding: 1rem 2rem;
  margin: 0 auto;
  margin-top: 2rem;
  @media (min-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 2px;
  }
  @media (min-width: 768px) {
    text-align: left;
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

// FooterSecond Section
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
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  text-align: center;
`;

const Span = styled.span`
  margin-left: 0.5rem;
`;

// FooterSocial
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

// FooterSocialIcons
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

// Signature
const SignContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  font-family: "Raleway", sans-serif;
  ${IconContainer} {
    background-color: black;
    margin: 0.2rem 0.2rem;
  }
`;

const SignatureContainer = styled.section`
  margin-top: 1rem;
  color: #fff;
  font-weight: 700;
  transition: margin-top 0.2s;
  @media (min-width: 1200px) {
    margin-top: 2rem;
  }
`;

const Contact = styled.p`
  color: inherit;
  font-family: "Open Sans", sans-serif;
  text-align: center;
`;
export {
  FooterContainer,
  FooterLinksContainer,
  FooterLink,
  LinksContainer,
  Container,
  CopyRight,
  Span,
  PlayStoreImg,
  FooterSocialContainer,
  SocialIconsContainer,
  IconContainer,
  SignContainer,
  SignatureContainer,
  Contact,
};
