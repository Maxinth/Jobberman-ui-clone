import styled from "styled-components";

// StandOutCard
const IconContainer = styled.span`
  background-color: rgb(255, 98, 0);
  border-radius: 100px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: #fff;
    font-size: 2rem;
  }
`;

const Title = styled.h5`
  color: rgb(255, 98, 0);
  font-size: 1.5rem;
  text-align: center;
  font-weight: 300;
  margin: 0.5rem 0 2rem;
`;

const Text = styled.p`
  color: rgb(78, 85, 89);
  max-width: 340px;
  text-align: center;
  font-size: 1rem;
  color: rgb(78, 85, 89);

  @media (min-width: 879px) {
    max-width: 250px;
  }
`;

// HowToBlock

const Btn = styled.button`
  text-transform: uppercase;

  background-color: rgb(255, 98, 0);
  letter-spacing: 0.01rem;
  font-family: "Open Sans", sans-serif;
  outline: none;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.7rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: padding 0.2s, font-size 0.2s ease-in-out;

  a {
    color: #fff;
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
  }

  @media (min-width: 500px) {
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    a {
      padding: 0.6rem 3rem;
    }
    font-size: 1rem;
  }
`;

const HowTosContainer = styled.div`
  font-family: "Roboto", sans-serif;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`;

// StandOut
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

const HowTo = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 2rem;
  box-shadow: 1px 1px 8px grey;
  border-radius: 10px;
  padding: 2rem 0;
`;

export {
  Container,
  Heading,
  SecondHeading,
  HowTo,
  IconContainer,
  Title,
  Text,
  HowTosContainer,
  Btn,
};
