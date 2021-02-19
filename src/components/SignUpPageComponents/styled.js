import { AdContainer } from "../EmployersPageComponents/Advertise/styled";
import styled from "styled-components";
import {
  IconContainer,
  HowTo as Container,
  HowTosContainer,
  Btn,
} from "../../components/StandOut/standOutElements";

const SignUpContainer = styled(AdContainer)`
  margin-top: 4rem;
  color: rgb(78, 85, 89);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  padding-bottom: 5rem;

  ${IconContainer} {
    background-color: rgb(78, 85, 89);
    margin-bottom: 1rem;
    > svg {
      font-size: 4rem;
    }
  }

  ${Container} {
    max-width: 900px;
    width: 100%;
    @media (min-width: 960px) {
      > * {
        width: 100%;
      }
    }

    @media (min-width: 960px) {
      > * > * {
        flex: 1;
      }
    }

    ${HowTosContainer} {
      @media (min-width: 960px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    ${Btn} {
      width: 100%;
      margin-top: 1.5rem;
      > a {
        padding-top: 0.5rem !important;
        padding-bottom: 0.5rem !important;
        @media (min-width: 1200px) {
          padding-top: 1rem !important;
        }
      }
    }
    a {
      margin-bottom: unset;
      cursor: unset;

      :first-child {
        border-bottom: 1px solid ghostwhite;
        padding-bottom: 2rem;
      }

      :last-child {
        padding-top: 2rem;
      }
      @media (min-width: 960px) {
        :last-child {
          padding-top: 0.5rem;
        }
      }
      @media (min-width: 1200px) {
        :last-child {
          margin-top: -0.5rem;
        }
      }
    }
  }
`;

const Heading = styled.h2`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export { Heading, SignUpContainer, Container };
