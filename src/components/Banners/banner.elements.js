import { Link } from "react-router-dom";
import styled from "styled-components";
import bgOnSmallScreen from "../../assets/sm-jobseeker-hero.jpg";
import bgOnLargeScreen from "../../assets/jm-jobseeker-hero.jpg";

const MainBannerContainer = styled.section`
  margin-top: 4.2rem;
  font-family: "Open Sans", sans-serif;

  /* @media (min-width: 510px) {
    margin-top: 4rem;
  }
  @media (min-width: 525px) {
    margin-top: 3.8rem;
  }
  @media (min-width: 541px) {
    margin-top: 3.6rem;
  }
  @media (min-width: 556px) {
    margin-top: 3.4rem;
  }
  @media (min-width: 596px) {
    margin-top: 4.2rem;
  } */
`;

const MainBannerImg = styled.img`
  object-fit: cover;
  width: 100%;
  display: ${(props) => (props.lg ? "none" : "block")};

  margin: 4rem 1rem 2rem;

  @media (min-width: 642px) {
    display: ${(props) => (!props.lg ? "none" : "block")};
    width: ${(props) => (props.lg ? `calc(400px + 10vw)` : "unset")};
  }
`;

const BannerMain = styled.section`
  background-image: url(${bgOnSmallScreen});
  object-fit: contain;
  /* padding: 1rem; */
  width: 100%;
  background-position: 60% 2%;
  background-repeat: no-repeat;
  min-height: 648px;
  display: block;
  min-width: 300px;
  transition: background-position 0.2s;
  margin-top: -0.5rem;

  @media (min-width: 642px) {
    /* background-image: url("../../assets/jm-jobseeker-hero.jpg"); */
    object-fit: cover;
    background-image: url(${bgOnLargeScreen});
    background-position: 100% 5%;
    background-repeat: no-repeat;
    /* display: inline-flex; */
    width: 100%;
    min-height: 500px;
  }
`;

const SelectBoxItem = styled.select`
  padding: 0.8rem 0.5rem;
  background-color: #fff;
  margin-bottom: 1rem;
  border: none;
  outline: none;
  text-align: center;
  border-radius: 5px;
  font-size: 1.1rem;
  text-transform: capitalize;
  cursor: pointer;

  /* larger screen */
  @media (min-width: 1024px) {
    margin-right: 1rem;
    margin-bottom: unset;
  }
`;

const SelectBoxOption = styled.option`
  min-width: 300px;
  font-family: "Raleway", sans-serif;
  padding: 0.5rem;
`;

// SmallBanner components
const SmallBannerBox = styled.section`
  width: 100%;
  font-family: "Open Sans", sans-serif;
  background: linear-gradient(to right, rgb(14, 1, 53), rgb(38, 15, 141));
`;

const SmallBannerContainer = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 1.5rem 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  text-align: center;

  > * {
    margin-bottom: 1rem;
  }

  @media (min-width: 596px) {
    flex-direction: row;
    justify-content: space-evenly;
    text-align: unset;

    > * {
      margin-bottom: unset;
      margin-left: 1rem;
    }
  }
`;

const Text = styled.span`
  font-family: inherit;
  color: #fff;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  display: inline-block;

  &:first-child {
    margin-top: 1rem;
  }

  @media (min-width: 596px) {
    &:first-child {
      margin-left: unset;
      margin-top: unset;
    }
  }
`;

const BannerLink = styled(Link)`
  text-transform: uppercase;
  color: tomato !important;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  margin-top: 0.5rem;
  transition: all 0.3s;

  @media (min-width: 596px) {
    margin-left: 1rem;
    margin-top: 0.2rem;
  }
`;

// BannerBottom
const Heading = styled.h3`
  font-weight: 300;
  color: #fff;
  font-size: 1.2rem;
  padding: 1rem;

  @media (min-width: 642px) {
    font-size: 1rem;
  }
`;

const VideoContainer = styled.section`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  margin-top: 1rem;
  padding: 1rem;
  transition: justify-content 0.3s;

  @media (min-width: 642px) {
    justify-content: flex-end;
  }
`;

const BannerVideo = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: center;

  @media (min-width: 642px) {
    justify-content: flex-start;
    margin-right: 2rem;
  }
`;

const BannerBtn = styled.button`
  outline: none;
  border: none;
  background-color: #fff;
  border-radius: 5px;
  margin-right: 1rem;

  > a {
    display: block;
    width: 100%;
    padding: 0.5rem 2rem;
    font-size: 1.1rem;
  }
  @media (min-width: 642px) {
    margin-right: 1rem;
    height: 40px;
    margin-top: 0.5rem;

    > a {
      padding: 0rem 2.5rem;
      font-size: 1.1rem;
    }
  }
`;

const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(0, 0, 0, 0.45); */
  margin-bottom: 1rem;
`;

const BannerForm = styled.form`
  /* margin-top: 2rem; */
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.45);

  > * {
    flex: 1;
  }

  @media (min-width: 1150px) {
    flex-direction: row;
  }
`;

export {
  SelectBoxItem,
  SelectBoxOption,
  SmallBannerBox,
  MainBannerContainer,
  SmallBannerContainer,
  Text,
  BannerLink,
  MainBannerImg,
  BannerMain,
  Heading,
  VideoContainer,
  BannerVideo,
  BannerBtn,
  FormContainer,
  BannerForm,
};
