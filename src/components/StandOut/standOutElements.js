import styled, { css } from "styled-components";

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

export const Box = styled.div``;

// HowToBlock

const Btn = styled.button`
  text-transform: uppercase;
  display: block;
  background-color: ${({ editBtn }) => (!editBtn ? "rgb(255, 98, 0)" : "#333")};
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

  //when the editBtn prop is true

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

const HowTosContainer = styled.section`
  font-family: "Roboto", sans-serif;

  /* link and div sharing the same styles as each can be the child element of HowTosContainer 
based on the prop withBtn - see StandOutCard */
  a,
  div {
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
  background-color: rgb(250, 250, 250);
  /* background-color: rgb(226, 232, 240); */
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

const Testimonials = styled.section`
  margin: 4rem 2rem 0.5rem;
  background-color: rgb(250, 250, 250);
`;

// CircleControls
const ControlsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  transition: margin-top 0.2s;

  // @media (min-width: 1200px) {
  //   margin-top: 0.5rem;
  // }

  svg {
    color: #333;
    transition: color 0.2s;
  }
  svg.current {
    color: rgb(255, 98, 0);
  }
`;

// Testimonial

const TestimonyContainer = styled.section`
  margin: 0 auto;
  max-width: 1000px;
  padding: 0.5rem 1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(78, 85, 89);
  font-family: "Roboto", sans-serif;
  position: absolute;
  /* border: 2px solid red; */
  /* top: 12rem; */
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  ${(props) =>
    props.position === "activeSlide" &&
    css`
      opacity: 1;
      transform: translateX(0%);
    `}

  ${(props) =>
    props.position === "lastSlide" &&
    css`
      transform: translateX(-100%);
    `}

    
${(props) =>
    props.position === "nextSlide" &&
    css`
      transform: translateX(100%);
    `}


 
  

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
const ImageContainer = styled.div``;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  display: block;
  border-radius: 10px;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  @media (min-width: 600px) {
    text-align: left;
    align-items: flex-start;

    padding: 1rem;
  }
`;

const Name = styled.h5`
  font-size: calc(1.1rem + 2vw);
  transition: font-size 0.2;
  border-bottom: 4px solid rgb(255, 98, 0);
  padding: 0.5rem;
  text-transform: uppercase;

  @media (min-width: 600px) {
    font-size: calc(0.5rem + 2vw);
  }

  @media (min-width: 768px) {
    font-size: calc(0.7rem + 2vw);
  }

  @media (min-width: 900px) {
    font-size: 1.8rem;
  }
`;
const Position = styled.h6`
  font-size: 1.1rem;
  padding: 0.5rem;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  @media (min-width: 600px) {
    font-size: calc(0.2rem + 2vw);
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;
const Testimony = styled.p`
  font-weight: 300;
  line-height: 26.4px;
  overflow-wrap: break-word;
  padding-top: 10px;

  font-size: 1rem;
`;
const MoreInfo = styled.button`
  outline: none;
  border: none;
  background: transparent;
  margin-top: 1rem;

  a {
    color: rgb(255, 98, 0);
    text-transform: uppercase;
    font-size: 1rem;

    display: block;
    width: 100%;
  }
`;

// TestimonialItems
const TestimonialsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  max-width: 900px;
  height: 100%;
  padding: 2rem;
  margin: 0 auto;
  max-width: 900px;
  min-height: 1000px;
  z-index: 10;
  padding: 2rem;
  transition: min-height 0.3s;
  box-shadow: 1px 1px 9px grey;
  width: 100%;

  @media (min-width: 500px) {
    min-height: 900px;
  }
  @media (min-width: 620px) {
    min-height: 750px;
  }
  @media (min-width: 700px) {
    min-height: 650px;
  }
  @media (min-width: 700px) {
    min-height: 550px;
  }
  @media (min-width: 900px) {
    min-height: 520px;
  }
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
  ControlsContainer,
  TestimonyContainer,
  ImageContainer,
  Image,
  Info,
  Name,
  Position,
  MoreInfo,
  Testimony,
  TestimonialsContainer,
  Testimonials,
};
