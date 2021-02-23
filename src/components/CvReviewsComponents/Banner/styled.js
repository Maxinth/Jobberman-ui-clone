import styled from "styled-components";
import mainBg from "../../../assets/main-image-gradient.png";
import bannerImg from "../../../assets/jm-cv-services-banner-d.jpg";

const Container = styled.section`
  margin-top: 4.5rem;
  font-family: "Open Sans", sans-serif;
  background-image: url(${mainBg});
  object-fit: contain;
  width: 100%;
  background-position: 90% 50%;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: ${({ colored }) => (colored ? "rgb(255, 98, 0)" : "#fff")};
  font-weight: 600;
  transition: all 0.2s;
  @media (max-width: 300px) {
    margin-left: 1rem;
  }
  @media (min-width: 1200px) {
    font-size: 2.5rem;
  }
`;

const HeroContainer = styled.section`
  padding: 1rem 2rem;
  transition: padding 0.2;
  width: 100%;
  background-image: url(${bannerImg});
  object-fit: contain;
  width: 100%;
  background-position: 0% 50%;
  @media (max-width: 300px) {
    padding: unset;
  }
  @media (min-width: 600px) {
    padding: 6rem 1rem;
  }
  @media (min-width: 1200px) {
    padding: 5rem 1rem;
  }
`;

const HeroBox = styled.div`
  ${Heading} {
    font-family: "Roboto", sans-serif;
    line-height: 1.8;
  }
`;

export { Container, Heading, HeroContainer, HeroBox };
