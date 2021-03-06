import {
  HowTosContainer,
  Heading,
  Text,
} from "../../StandOut/standOutElements";
import { ConnectBox as ProductBox } from "../../Connect/styled";
import styled, { css } from "styled-components";

const FeaturedContainer = styled(HowTosContainer)`
  display: block;
  background-color: rgb(250, 250, 250);
  padding: 1rem 2rem;
  width: 100%;
  ${Heading} {
    /* text-align: center; */
    margin: 2rem auto;
    max-width: 500px;
  }

  ${ProductBox} {
    padding: 1rem 2rem;
    /* max-width: 600px; */
    box-shadow: unset;
    transition: all 0.2s;
    h4 {
      font-size: 1.7rem;
    }
    p + p {
      margin-top: 3rem;
    }
    /* @media (min-width: 1024px) {
      max-width: 900px;
      > * {
        text-align: left !important;
      }
    } */
  }

  ${Text} {
    max-width: 600px;
    line-height: 1.8;
  }
`;

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1rem 6rem;
  @media (min-width: 1024px) {
    width: 100%;

    flex-direction: row;
    > * {
      margin: unset;
    }
  }
`;

// accessJobSeekers.js

const AssessContainer = styled(HowTosContainer)`
  > * {
    width: 100%;
    /* text-align: inherit; */
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
  /* text-align: center; */
  box-shadow: 1px 1px 7px grey;
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
      font-size: 2.5rem !important;
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

// CategoryItem

const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 0.5rem;
  svg {
    font-size: 0.9rem;
    color: rgb(78, 85, 89);
    margin-right: 0.5rem;
  }

  ${({ match }) =>
    match &&
    css`
      :first-child,
      :first-child > * {
        color: rgb(78, 85, 89);
      }
      svg {
        color: rgb(255, 98, 0);
      }
    `}
`;
const ItemText = styled.span`
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  text-transform: capitalize;
  color: rgb(78, 85, 89);
`;

// Assessments
const Categories = styled.ul`
  width: 100%;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const Box = styled.div`
  ${Heading} {
    width: 100%;
    margin: 2rem auto;
  }

  ${Text} {
    text-align: left;
  }
`;
export {
  MainContainer,
  FeaturedContainer,
  Heading,
  Span,
  PriceBox,
  AssessContainer,
  Text,
  ListItem,
  ItemText,
  Categories,
  ProductBox,
  Box,
};
