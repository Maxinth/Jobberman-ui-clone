import styled from "styled-components";

// JobsView
const JobsContainer = styled.section`
  @media (min-width: 1250px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    > * {
      margin-right: 1rem;
    }
  }
`;

// JobSection
const JobHeader = styled.h4`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: #333;

  svg {
    color: ${(props) => props.color};
    font-size: 2.5rem;
  }
`;

const JobSectionContainer = styled.section`
  border-top: 1px solid rgb(223, 209, 219);
  padding: 1rem;
  margin-bottom: 3rem;
  margin-top: 1rem;

  @media (min-width: 1250px) {
    border-top: 1px solid rgb(223, 209, 219);
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  a {
    color: orange;
    text-transform: uppercase;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    transition: border-bottom 0.2s ease-in-out;
    border-bottom: 2px solid transparent;
    :hover {
      border-bottom: 2px solid black;
    }
  }
`;

const JobsListContainer = styled.div`
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    > * {
      margin-right: 1rem;
    }
  }
  @media (min-width: 1250px) {
    > * {
      margin-right: unset;
    }
    display: block;
  }
`;

// JobCard
const Container = styled.section`
  background-color: #fff;
  padding: 1rem;
  font-family: "Open Sans", sans-serif;
  box-shadow: 1px 2px 4px grey;
  border-radius: 5px;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: min-height 0.2s;
  min-height: 200px;

  @media (min-width: 1250px) {
    min-height: 170px;
  }
`;

const JobTitle = styled.h4`
  /* max-width: 200px; */
  margin-bottom: 0.2rem;
  color: #333;
  text-transform: uppercase;

  + p {
    font-weight: 600;
  }
  @media (min-width: 1000px) {
    max-width: 150px;
  }
  @media (min-width: 1100px) {
    max-width: 250px;
  }
`;
const TitleContainer = styled.div`
  margin-left: 1rem;
  color: rgb(78, 85, 89);
  transition: margin-left 0.2s;

  @media (max-width: 280px) {
    margin-left: 0.5rem;
  }
  @media (min-width: 700px) {
    margin-left: 2rem;
  }
  @media (min-width: 1000px) {
    margin-left: 0.5rem;
  }
`;
const Text = styled.p`
  font-size: 0.9rem;
  text-transform: capitalize;
`;
const InnerContainer = styled.section`
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

const IconContainer = styled.div`
  background-color: rgb(78, 85, 89);
  border-radius: 100px;
  padding: 0.5rem;

  svg {
    font-size: 2rem;
    color: #fff;
    transition: font-size 0.2s;
  }

  @media (min-width: 700px) {
    padding: 1rem;

    svg {
      font-size: 2rem;
    }
  }
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;

  svg {
    color: ${(props) => props.iconColor};
  }

  svg {
    font-size: 1rem;
  }
`;

const TimeStamp = styled.span`
  margin-left: 0.5rem;
  font-size: 0.9rem;
  color: rgb(78, 85, 89);
`;
export {
  JobsContainer,
  JobHeader,
  JobSectionContainer,
  LinkContainer,
  JobsListContainer,
  Container,
  JobTitle,
  TitleContainer,
  Text,
  InnerContainer,
  IconContainer,
  Time,
  TimeStamp,
};
