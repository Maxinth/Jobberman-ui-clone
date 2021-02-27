import styled from "styled-components";
import { BannerForm, FormContainer } from "../../Banners/banner.elements";

const BgBox = styled.section`
  width: 100%;
  ${BannerForm} {
    @media (min-width: 1140px) {
      padding: unset;
    }
  }

  ${FormContainer} {
    padding-top: 1rem;
  }
`;

const Title = styled.h3`
  text-transform: uppercase;
  color: #fff;
  padding-top: 1rem;
  font-family: "Roboto", sans-serif;
`;

const FindJobContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(0deg, #1a4d98, #4168c6);
`;

const JobsContainer = styled.section`
  margin-top: 4.5rem;
`;
export { FindJobContainer, Title, BgBox, JobsContainer };
