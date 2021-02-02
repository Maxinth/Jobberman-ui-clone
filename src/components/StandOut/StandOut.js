import styled from "styled-components";
import StandOutCard from "./StandOutCard";
import { data } from "./data";

const Container = styled.section`
  background-color: rgb(226, 232, 240);
  font-family: "Open Sans", sans-serif;
  padding: 2rem 0.5rem;
`;

const Heading = styled.h3`
  font-size: 2rem;
  text-align: center;
  padding-top: 1rem;
`;

const SecondHeading = styled.h4`
  font-size: 1.5rem;
  text-align: center;
  color: rgb(78, 85, 89);
  font-family: "Roboto", sans-serif;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const HowTosContainer = styled.section`
  font-family: "Roboto", sans-serif;
  background-color: #fff;
  margin: 1rem 2rem;
  box-shadow: 1px 1px 8px grey;
  border-radius: 10px;
  padding: 2rem 0;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 897px) {
    /* display: flex;
    align-items: center;
    justify-content: space-between; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

// styled.``;
const StandOut = () => {
  return (
    <Container>
      <Heading>Stand Out!</Heading>
      <SecondHeading> How JobberMan Helps You</SecondHeading>
      <HowTosContainer>
        {data.map((item, index) => (
          <StandOutCard {...item} key={index} />
        ))}
      </HowTosContainer>
    </Container>
  );
};

export default StandOut;
