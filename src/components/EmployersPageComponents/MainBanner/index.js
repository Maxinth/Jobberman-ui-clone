import styled from "styled-components";
import bgImg from "../../../assets/employer-hero-22.jpg";
import smBg from "../../../assets/sm-employer-hero.jpg";
import {
  JobSeekerContainer,
  BannerMain,
} from "../../JobSeekerPageComponents/styled";
import MainBannerSection from "../../Banners/MainBannerSection";
import { largerScreenImg, smallScreenImg, mainHeading } from "./data";

const EmployersContainer = styled(JobSeekerContainer)`
  ${BannerMain} {
    margin-top: unset;
    background-color: rgb(255, 98, 0);
    background-image: url(${smBg});
    h1 {
      display: none;
    }
  }

  @media (min-width: 642px) {
    ${BannerMain} {
      background-image: url(${bgImg});
    }
  }
`;

const EmployersMainBanner = () => {
  return (
    <EmployersContainer lg={bgImg} sm={bgImg}>
      <MainBannerSection
        lgImg={largerScreenImg}
        smImg={smallScreenImg}
        mainText={mainHeading}
      />
    </EmployersContainer>
  );
};

export default EmployersMainBanner;
