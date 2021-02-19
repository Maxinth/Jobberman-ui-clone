import React from "react";
import { AdContainer } from "../EmployersPageComponents/Advertise/styled";
import GenerateAdCards from "../EmployersPageComponents/Advertise/GenerateAdCards";
import styled from "styled-components";
import { data } from "./data";
import {
  IconContainer,
  HowTo as Container,
  Btn,
} from "../../components/StandOut/standOutElements";

const SignUpContainer = styled(AdContainer)`
  margin-top: 3rem;
  color: rgb(78, 85, 89);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${IconContainer} {
    background-color: rgb(78, 85, 89);
    margin-bottom: 1rem;
    > svg {
      font-size: 4rem;
    }
  }

  ${Container} {
    ${Btn} {
      width: 100%;
      margin-top: 1.5rem;
      > a {
        padding-top: 0.5rem !important;
        padding-bottom: 0.5rem !important;
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
    }
  }
`;

const Heading = styled.h2`
  margin-top: 2rem;
`;

const SignUpPage = () => {
  return (
    <SignUpContainer>
      <Heading>Create your Account</Heading>
      <Container>
        <GenerateAdCards data={data} withBtn={true} />
      </Container>
    </SignUpContainer>
  );
};

export default SignUpPage;
