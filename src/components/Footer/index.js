import { FooterContainer, FooterLinksContainer } from "./styled";
import FooterMain from "./FooterMain";
import Signature from "./Signature";
import React from "react";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterMain />
        <Signature />
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
