import MainBannerSection from "../Banners/MainBannerSection";
import styled from "styled-components";
import {
  BannerMain,
  FormContainer,
  MainBannerImg,
  Container,
} from "../Banners/banner.elements";
import WhyJobberMan from "./WhyJobberMan";


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
const index = () => {
  return (
    <JobSeekerContainer>
      <MainBannerSection />
      <WhyJobberMan />
    </JobSeekerContainer>
  );
};

export default index;
