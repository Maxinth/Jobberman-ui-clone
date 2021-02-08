import { Link } from "react-router-dom";
import styled from "styled-components";
import { linksData } from "./linksData";

const FooterLink = styled(Link)`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  display: block;
  margin: 0.4rem 0;
  margin-bottom: 0.8rem;
  transition: all 0.2s;
  font-size: 0.9rem;

  :hover {
    color: rgb(255, 98, 0);
  }

  @media (min-width: 768px) {
    min-width: 100px;
    display: inline;
    margin-bottom: unset;
  }
  @media (min-width: 900px) {
    min-width: 200px;
  }
`;

const LinksContainer = styled.div`
  text-align: center;
  max-width: 1000px;
  padding: 1rem 2rem;
  margin: 0 auto;
  margin-top: 2rem;
  @media (min-width: 768px) {
    /* text-align: left; */
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 2px;
    /* grid-template-columns: repeat(12, 1fr); */
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-between; */
  }
  @media (min-width: 768px) {
    text-align: left;
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;
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
