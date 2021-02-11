import styled from "styled-components";
import { Container, JobBox, Heading } from "../../JobCount/styled";
import { Btn } from "../../StandOut/standOutElements";
import CTA from "../../CTA";
// styled.``;
const BtnContainer = styled.section`
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ${Btn} {
    width: 100%;
    @media (min-width: 768px) {
      width: 50%;
      :first-child {
        margin-right: 1rem;
      }
    }
  }
`;
const Text = styled.p`
  color: rgb(78, 85, 89);
  font-size: 1.4rem;
  font-family: "Roboto", sans-serif;
  margin: 0.5rem 0;
`;

const StartedContainer = styled(Container)`
  ${JobBox} {
    padding: 1rem 1rem 2rem;
  }
  ${Heading} {
    color: rgb(78, 85, 89);
  }
  ${Text} {
    text-align: center;
    color: rgb(78, 85, 89);
  }
`;
const GetStarted = () => {
  return (
    <StartedContainer>
      <JobBox>
        <Heading>Let’s Get Started</Heading>
        <Text>What would you like to do? </Text>
        <BtnContainer>
          <CTA text="create your account" goTo="/sign-up" />
          <CTA text="explore jobs" goTo="/jobs" />
        </BtnContainer>
      </JobBox>
    </StartedContainer>
  );
};

export default GetStarted;
