import { SignUpContainer, Container } from "../../SignUpPageComponents/styled";
import styled from "styled-components";
import { HowTosContainer } from "../../EmployersPageComponents/Advertise/styled";

const HowContainer = styled(SignUpContainer)`
  font-family: "Roboto", sans-serif;
  margin-top: unset;
  padding: 2rem;
  ${Container} {
    max-width: unset;
    background-color: inherit;
    box-shadow: unset;
    ${HowTosContainer} {
      a {
        transform: translateY(-40px);
        transition: margin 0.2s;
      }
      a > span {
        padding: 2.5rem;
      }
      @media (min-width: 960px) {
        a:first-child {
          margin-top: 6.5rem;
        }
        a:nth-child(2) {
          margin-top: -0.2rem;
        }
        a:nth-child(3) {
          margin-top: 1.8rem;
        }
        a:nth-child(4) {
          margin-top: 2.4rem;
        }
      }
      @media (min-width: 1249px) {
        a:first-child {
          margin-top: 4.8rem;
        }
      }
    }
  }
`;
const Heading = styled.h3`
  text-align: center;
  font-size: 2rem;
  margin-top: 4rem;
  color: rgb(78, 85, 89);
  font-weight: 400;
  margin-bottom: 2rem;
  transition: margin 0.2s;
  @media (min-width: 960px) {
    margin-bottom: unset;
  }
`;

export { HowContainer, Heading, Container };
