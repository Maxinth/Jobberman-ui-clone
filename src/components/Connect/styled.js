import styled, { css } from "styled-components";

const ConnectContainer = styled.section`
  background-color: rgb(242, 242, 242);
  font-family: "Open Sans", sans-serif;
  padding: 4rem 2rem;
`;

const ConnectBox = styled.section`
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  /* box-shadow: 1px 1px 5px grey; */
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.1) 0px 3px 1px -2px, rgba(0, 0, 0, 0.06) 0px 1px 5px 0px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    margin-top: 3rem;
  }
`;

const CompaniesLogosContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* margin-bottom: 1rem; */
`;

// CompaniesLogo
const Container = styled.section`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 900px;
  transition: height 0.2s;

  @media (min-width: 424px) {
    height: 480px;
  }
  @media (min-width: 556px) {
    height: 350px;
  }
  @media (min-width: 800px) {
    height: 300px;
  }
  @media (min-width: 952px) {
    height: 250px;
  }
`;

// CompanyBox

const CoyLogo = styled.img`
  display: inline-block;
  width: 100%;
  width: 100px;
  height: 100px;
  object-fit: contain;
  transition: all 0.2s;
`;

const CompaniesLogos = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 60px;
  padding: 0rem 2rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;

  // do based on props
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

  > * {
    flex: 1;
    margin: 0 1rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 900px) {
    margin-bottom: unset;
  }
`;

// Headings
const Heading = styled.h5`
  text-align: center;
  font-size: ${({ smaller }) => (smaller ? "1rem" : "1.2rem")};
  font-family: "Raleway", sans-serif;
  padding: 0 2rem 1rem;
  font-weight: 700;
  transition: font-size 0.2s;
  ${(props) =>
    props.smaller &&
    css`
      font-weight: 500;
    `}

  @media (min-width: 500px) {
    font-size: ${({ smaller }) => (smaller ? "1.2rem" : "2rem")};
  }
`;

const HeadingsContainer = styled.div``;
export {
  Container,
  CoyLogo,
  CompaniesLogos,
  ConnectContainer,
  ConnectBox,
  CompaniesLogosContainer,
  Heading,
  HeadingsContainer,
};
