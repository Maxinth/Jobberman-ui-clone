import styled from "styled-components";
import {
  BannerMain,
  FormContainer,
  MainBannerImg,
  Container,
} from "../Banners/banner.elements";

// index.js
const JobSeekerContainer = styled.section`
  font-family: "Open Sans", sans-serif;
  ${BannerMain} {
    margin-top: 4.7rem;
  }

  ${FormContainer} {
    display: none;
  }

  ${MainBannerImg} {
    margin-top: 1rem;
  }

  ${Container} {
    margin-top: 1rem;
    max-width: 700px;
    > * {
      padding-left: unset;
    }
    h1 {
      display: block;
      font-family: "Raleway", sans-serif;
    }
  }

  @media (min-width: 1200px) {
    ${MainBannerImg} {
      margin-top: 2rem;
      width: 700px;
    }

    ${Container} {
      max-width: 700px;
    }
  }
`;

// Why.js
const WhyBox = styled.section`
  border: 30px solid rgb(216, 216, 216);
  border-radius: 5px;
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 0.5s;
  opacity: ${({ match }) => (match === "current" ? 1 : 0)};

  @media (min-width: 960px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Heading = styled.h3`
  padding: 1rem;
  text-align: center;
  margin-top: 1rem;
  font-size: calc(1rem + 2vw);
  font-weight: 700;

  @media (min-width: 960px) {
    font-size: 1.5rem;
    text-align: left;
  }
`;

const Text = styled.p`
  padding: 1rem;
  font-size: calc(0.4rem + 2vw);
  text-align: center;

  @media (min-width: 600px) {
    font-size: 1.2rem;
  }
  @media (min-width: 960px) {
    font-size: 1rem;
    text-align: left;
  }
`;

const Item = styled.div`
  color: rgb(78, 85, 89);

  > * {
    color: inherit;
  }
  font-family: "Open Sans", sans-serif;
  :first-child {
    margin-bottom: 2rem;
    transition: margin-bottom 0.2;
  }

  @media (min-width: 960px) {
    :first-child {
      margin-bottom: unset;
      border-right: 30px solid rgb(216, 216, 216);
      width: 700px;
    }
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  display: block;
`;

// WhyJobberMan
const WhySection = styled.section`
  padding: 1rem 2rem;
  background: #fff;
  margin: 3rem 0;
  > h3 {
    margin-top: unset;
    margin-bottom: 1rem;
  }
`;

const Title = styled.h3`
  padding: 1rem;
  text-align: center;
  margin-top: 1rem;
  font-size: calc(1rem + 2vw);
  font-weight: 700;
`;

const WhyContainer = styled.section`
  display: flex;
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: calc(35rem + 5vw);
  transition: margin-bottom 0.2s;

  @media (min-width: 500px) {
    margin-bottom: calc(35rem + 25vw);
  }
  @media (min-width: 800px) {
    margin-bottom: calc(35rem + 35vw);
  }
  @media (min-width: 960px) {
    margin-bottom: calc(15rem + 30vw);
  }
  @media (min-width: 1200px) {
    margin-bottom: calc(30rem + 5vw);
  }
`;

export {
  JobSeekerContainer,
  WhyBox,
  Heading,
  Text,
  Item,
  Image,
  WhySection,
  Title,
  WhyContainer,
};
