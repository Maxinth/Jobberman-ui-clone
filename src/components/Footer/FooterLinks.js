import { Link } from "react-router-dom";
import styled from "styled-components";
import { linksData } from "./linksData";

const FooterLink = styled(Link)`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  display: block;
  margin: 0.4rem 0;
  transition: color 0.2s;
  font-size: 0.9rem;

  :hover {
    color: rgb(255, 98, 0);
  }
`;
const FooterLinks = () => {
  return (
    <>
      {linksData.map((item) => {
        const { goTo, linkText } = item;
        return (
          <FooterLink to={`/${goTo}`} key={goTo}>
            {linkText}
          </FooterLink>
        );
      })}
    </>
  );
};

export default FooterLinks;
