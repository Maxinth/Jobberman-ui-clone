import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import bgOnSmallScreen from "../../assets/sm-jobseeker-hero.jpg";
import bgOnLargeScreen from "../../assets/jm-jobseeker-hero.jpg";
import { global } from "../../globalStyles";

const MainBannerContainer = styled.section`
  margin-top: 4.2rem;
  font-family: "Open Sans", sans-serif;
`;

const MainBannerImg = styled.img`
  object-fit: cover;
  width: 100%;
  display: ${(props) => (props.lg ? "none" : "block")};
  transition: padding-left 0.2s;
  /* margin: 4rem 1rem 2rem; */

  @media (min-width: 642px) {
    display: ${(props) => (!props.lg ? "none" : "block")};
    width: ${(props) => (props.lg ? `calc(400px + 10vw)` : "unset")};
    padding-left: 3rem;
  }

  @media (min-width: 900px) {
    padding-left: 5rem;
  }
`;

const BannerMain = styled.section`
  background-image: url(${bgOnSmallScreen});
  background-color: rgba(9, 9, 156, 0.8);
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
    object-fit: cover;
    background-image: url(${bgOnLargeScreen});
    background-position: 100% 5%;
    background-repeat: no-repeat;
    /* display: inline-flex; */
    width: 100%;
    min-height: 500px;
  }
`;

const SelectBoxContainer = styled.div`
  display: ${({ twoItems }) => (twoItems ? "flex" : "unset")};
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const SearchText = styled.span`
  color: #fff;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  display: none;
`;

const SearchButton = styled.button`
  outline: none;
  border: none;
  background: ${global.mainOrange};
  margin-bottom: 0.9rem;
  margin-left: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  > svg {
    color: #fff;
    padding: 0.5rem;
    font-size: 3rem !important;
  }

  @media (min-width: 1024px) {
    /* margin-left: 1rem; */
  }

  @media (min-width: 1150px) {
    padding: 0.9rem 1rem;
    margin-left: 1rem;

    ${SearchText} {
      display: block;
      width: 100%;
      font-weight: 700;
    }
    > svg {
      display: none;
    }
  }
`;

const SelectBoxItem = styled.select`
  padding: 0.8rem 0.5rem;
  background-color: #fff;
  margin-bottom: 1rem;
  border: none;
  outline: none;
  /* text-align: center; */
  border-radius: 5px;
  font-size: 1.1rem;
  text-transform: capitalize;
  cursor: pointer;
  color: grey;
  width: 100%;
  transition: text-align 0.3s;

  /* larger screen */

  @media (min-width: 1150px) {
    text-align: center;
    width: unset;
  }
`;

const SelectBoxOption = styled.option`
  min-width: 300px;
  font-family: "Open Sans", sans-serif;
  padding: 0.5rem;
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
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
  font-weight: 400;
  color: #fff;
  font-size: ${({ bg }) => (bg ? "2rem" : "1rem")};
  padding: 1rem;

  @media (min-width: 642px) {
    font-size: ${({ bg }) => (bg ? "2rem" : "1rem")};
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
    padding: 0.5rem 1rem;
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
  padding-top: 2rem;
  /* background-color: rgba(0, 0, 0, 0.45); */
  /* margin-bottom: 1rem; */
`;

const BannerForm = styled.form`
  /* margin-top: 2rem; */
  width: 100%;
  padding: 2rem;
  /* margin-top: 8rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  background-color: rgba(0, 0, 0, 0.45);

  > * {
    margin-right: 1rem;
  }

  @media (min-width: 1140px) {
    flex-direction: row;
  }
`;

// BannerBottom
const Container = styled.section`
  text-align: center;
  transition: padding-left 0.3s;
  h1 {
    display: none;
  }
  @media (min-width: 642px) {
    text-align: left;
    max-width: 500px;
    padding-left: 3rem;
  }

  @media (min-width: 900px) {
    padding-left: 5rem;
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
  SelectBoxContainer,
  SearchButton,
  SearchText,
  Container,
};
