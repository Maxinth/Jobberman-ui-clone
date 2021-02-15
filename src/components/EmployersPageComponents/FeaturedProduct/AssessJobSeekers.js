import {
  HowTosContainer,
  Heading,
  Container,
  Text,
} from "../../StandOut/standOutElements";
import styled from "styled-components";
import CTA from "../../CTA";
const AssessContainer = styled(HowTosContainer)`
  > * {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  border: 1px solid ghostwhite;
  transition: all 0.2s;
  /* box-shadow: 1px 1px 2px grey; */
  > p {
    font-family: "Raleway", sans-serif;
    font-size: 1.6rem !important;
    + p {
      font-weight: 700;
    }
  }

  @media (min-width: 1024px) {
    flex: 1;
    max-width: 300px;
    margin: unset;
  }
`;

const PriceBox = styled.div`
  ${Text} {
    width: 100%;
    font-family: "Open Sans", sans-serif;
    color: rgb(255, 98, 0);
    line-height: 1.2;
    :nth-child(3) {
      font-size: 2.2rem !important;
    }

    :first-child {
      text-decoration: line-through;
      text-decoration-color: rgb(255, 98, 0);
      text-decoration-thickness: 3px;
      font-size: 2.2rem !important;
    }
    :nth-child(2) {
      font-size: 2.8rem !important;
    }
  }
  button {
    width: 100%;
    height: 40px;
    a {
      margin-bottom: unset;
      padding: unset;
    }
  }
`;

const Span = styled.span`
  font-style: italic;
  text-align: center;
  font-weight: bolder;
  width: 100%;
  display: block;
  margin: 0.5rem 0;
`;
const AssessJobSeekers = () => {
  return (
    // <Container>
    <AssessContainer>
      <Text> Assess Your</Text>
      <Text>Job Seekers</Text>
      <PriceBox>
        <Text>NGN 54,000</Text>
        <Text>NGN 48,600</Text>
        <Text>Per Listing </Text>
        <Span>(Save 10%)</Span>
        <CTA text="find out more" goTo="/skills-assessment" />
      </PriceBox>
    </AssessContainer>
    // </Container>
  );
};

export default AssessJobSeekers;
