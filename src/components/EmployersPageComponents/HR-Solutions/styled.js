import {
  Heading,
  Text,
  Span,
  MainContainer,
  FeaturedContainer,
  PriceBox,
} from "../FeaturedProduct/styled";
import { ConnectBox } from "../../Connect/styled";
import styled, { css } from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Btn } from "../../StandOut/standOutElements";

// index.js
const HrBox = styled(ConnectBox)`
  max-width: 500px;

  @media (min-width: 1024px) {
    max-width: 900px;
  }
`;

const HrContainer = styled(FeaturedContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${MainContainer} {
    box-shadow: 1px 2px 7px grey;
    justify-content: unset;
    padding: unset;
    max-width: 500px;
  }
  @media (min-width: 1024px) {
    ${MainContainer} {
      max-width: 900px;
    }
  }
`;

// ContactHrTeam
const ContactBox = styled.div`
  padding: 6rem 2rem;
  color: rgb(78, 85, 89);
  color: #333;
  font-family: "Open Sans", sans-serif;

  @media (min-width: 1024px) {
    padding: 6rem 0.5rem;
    padding-right: 1rem;
  }
  ${Heading} {
    font-size: 1.1rem;
    font-weight: normal;
    line-height: 1.7;
    margin: unset;
    margin-bottom: 0.5rem;
  }

  ${Heading}+ ${Heading} {
    font-weight: bold;
  }
  ${Span} {
    font-size: 1rem !important;
    color: inherit;
    font-style: unset;
    font-weight: 400;
    word-break: break-all;
    margin-bottom: 2rem;
    @media (min-width: 1024px) {
      font-size: 0.95rem !important;
      line-height: 1.8;
    }
  }
  ${Btn} {
    @media (min-width: 1024px) {
      font-size: 0.8rem;
    }
  }
`;

// Detail
const DetailText = styled.p`
  max-width: 600px;
  color: rgb(78, 85, 89);
  width: 100%;
  font-size: 0.9rem;
  line-height: 1.7;
  transition: max-width 0.2s;
  @media (min-width: 1024px) {
    max-width: 300px;
  }
`;

const DetailBox = styled.div`
  font-family: "Open Sans", sans-serif;
  margin-bottom: 1rem;
  transition: all 0.2;
  + div {
    transition: margin-left 0.2s;
  }
  @media (min-width: 1024px) {
    + div {
      margin-left: 4rem;
    }
  }

  @media (min-width: 1024px) {
    ${({ match }) =>
      match &&
      css`
        ${DetailText} {
          max-width: 700px;
          width: 100%;
        }
      `}
  }
`;
const DetailSpan = styled.span`
  font-weight: 600;
  color: #333;
  font-size: 1.1rem;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Icon = styled(ArrowForwardIosIcon)`
  color: rgb(255, 98, 0);
  font-size: 0.8rem !important;
  margin-right: 0.5rem;
`;

// EndToEnd

const Box = styled.div`
  > * {
    text-align: left;
  }
  ${Heading} {
    /* margin: unset; */
    margin: 1rem 0;
  }
  ${Text} {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

// EndToEndBottomSection
const InnerBox = styled.div`
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export {
  Heading,
  Span,
  ContactBox,
  DetailText,
  DetailBox,
  DetailSpan,
  Title,
  Icon,
  Box,
  Text,
  InnerBox,
  HrBox,
  HrContainer,
  MainContainer,
  PriceBox,
};
