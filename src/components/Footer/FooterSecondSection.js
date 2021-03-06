import { Container, CopyRight, Span } from "./styled";
import FooterSocial from "./FooterSocial";
import React from "react";

const FooterSecondSection = () => {
  return (
    <Container>
      <FooterSocial />
      <CopyRight>
        &copy; Jobberman 2021.<Span> All rights reserved. </Span>
      </CopyRight>
    </Container>
  );
};

export default FooterSecondSection;
