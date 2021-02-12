import styled from "styled-components";
// import
import { JobSeekerContainer as EmployersContainer } from "../../JobSeekerPageComponents/styled";
import BannerContainer from "../../Banners/BannerContainer";

const EmployersMainBanner = () => {
  return (
    <EmployersContainer>
      <BannerContainer lgImg smImg mainText />
    </EmployersContainer>
  );
};

export default EmployersMainBanner;
