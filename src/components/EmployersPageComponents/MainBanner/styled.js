import styled from "styled-components";
import bgImg from "../../../assets/employer-hero-22.jpg";
import smBg from "../../../assets/sm-employer-hero.jpg";
import {
  JobSeekerContainer,
  BannerMain,
} from "../../JobSeekerPageComponents/styled";

export const EmployersContainer = styled(JobSeekerContainer)`
  ${BannerMain} {
    margin-top: unset;
    background-color: rgb(255, 98, 0);
    background-image: url(${smBg}) !important;

    h1 {
      display: none;
    }
  }

  @media (min-width: 642px) {
    ${BannerMain} {
      background-image: url(${bgImg}) !important;
      background-position: 80% 35%;
    }
  }
`;
