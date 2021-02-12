import {
  SmallBannerBox,
  SmallBannerContainer,
  Text,
} from "../../Banners/banner.elements";

import styled from "styled-components";
import { Link } from "react-router-dom";

const EmployerSmallBanner = styled(SmallBannerBox)`
  margin-top: 4rem;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  ${Text} {
    font-family: inherit;
    line-height: 1.7;
  }

  ${SmallBannerContainer} {
    max-width: 100%;
    text-align: center;
  }
`;

const Span = styled.span`
  color: rgb(185, 32, 56);
  font-size: 1.8rem;
  margin: 0 0.2rem;
`;

const LearnMoreLink = styled(Link)`
  color: rgb(255, 98, 0);
  text-transform: uppercase;
  margin: 0 0.2rem;
`;

export { EmployerSmallBanner, Span, LearnMoreLink, SmallBannerContainer, Text };
